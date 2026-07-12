// engine-core.js
// Core state model + turn sequencer for the Axis & Allies Revised digital engine.
// Depends on GAME_DATA (game-data.js) and HOUSE_RULES (house-rules.js) being loaded first.

const PHASE_NAMES = [
  'developWeapons',
  'purchaseUnits',
  'combatMove',
  'conductCombat',
  'noncombatMove',
  'mobilizeUnits',
  'collectIncome'
];

const PHASE_DISPLAY = {
  developWeapons: 'Develop Weapons',
  purchaseUnits: 'Purchase Units',
  combatMove: 'Combat Move',
  conductCombat: 'Conduct Combat',
  noncombatMove: 'Noncombat Move',
  mobilizeUnits: 'Mobilize New Units',
  collectIncome: 'Collect Income'
};

function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// --- State initialization ---

function initGameState(gameData, houseRules) {
  const territories = {};
  Object.entries(gameData.territories).forEach(([name, t]) => {
    territories[name] = {
      name: name,
      isSea: t.isSea,
      owner: t.originalOwner,
      income: t.income,
      isVictoryCity: t.isVictoryCity,
      units: []
    };
  });

  let unitIdCounter = 1;
  Object.entries(gameData.startingSetup).forEach(([territoryName, placements]) => {
    placements.forEach(p => {
      for (let i = 0; i < p.quantity; i++) {
        territories[territoryName].units.push({
          id: 'u' + (unitIdCounter++),
          type: p.unitType,
          owner: p.owner
        });
      }
    });
  });

  const players = {};
  gameData.players.forEach(p => {
    const startingTechs = (houseRules.toggles.startingTechs && houseRules.toggles.startingTechs[p.id]) || [];
    players[p.id] = {
      id: p.id,
      name: p.name,
      side: p.side,
      ipc: p.startingIPC,
      techs: startingTechs.slice(),
      isolationism: (p.id === 'Americans' && houseRules.toggles.usIsolationism.enabled)
        ? { active: true, attackedByAxis: false }
        : null
    };
  });

  const anyTechResearchable = Object.values(houseRules.toggles.techs).some(t => t.researchable);
  const activePhases = anyTechResearchable
    ? PHASE_NAMES.slice()
    : PHASE_NAMES.filter(p => p !== 'developWeapons');

  return {
    round: 1,
    turnOrder: gameData.players.map(p => p.id),
    currentPlayerIndex: 0,
    activePhases: activePhases,
    currentPhaseIndex: 0,
    players: players,
    territories: territories,
    log: [{ round: 1, event: 'Game started' }]
  };
}

// --- Turn sequencer ---

function getCurrentPlayerId(state) {
  return state.turnOrder[state.currentPlayerIndex];
}

function getCurrentPhase(state) {
  return state.activePhases[state.currentPhaseIndex];
}

function canAct(state, playerId, phaseName) {
  return getCurrentPlayerId(state) === playerId && getCurrentPhase(state) === phaseName;
}

function advancePhase(state) {
  const next = deepClone(state);
  const endingPlayerId = getCurrentPlayerId(state);
  next.currentPhaseIndex++;

  if (next.currentPhaseIndex >= next.activePhases.length) {
    next.currentPhaseIndex = 0;
    next.log.push({ round: next.round, event: endingPlayerId + ' ended turn' });
    next.currentPlayerIndex++;

    if (next.currentPlayerIndex >= next.turnOrder.length) {
      next.currentPlayerIndex = 0;
      next.round++;
      next.log.push({ round: next.round, event: 'Round ' + next.round + ' begins' });
    }
  }
  return next;
}

// --- Submarine Concealment (house rule, digital-adaptation mechanic) ---

function buildAdjacencyMap(gameData) {
  const adj = {};
  Object.entries(gameData.territories).forEach(([name, t]) => {
    adj[name] = t.connections;
  });
  return adj;
}

function seaZonesWithinRadius(startTerritory, radius, adjacencyMap, gameData) {
  const visited = new Set([startTerritory]);
  let frontier = [startTerritory];
  const withinRadius = new Set();

  for (let step = 0; step < radius; step++) {
    const nextFrontier = [];
    frontier.forEach(t => {
      (adjacencyMap[t] || []).forEach(neighbor => {
        const nt = gameData.territories[neighbor];
        if (!nt || !nt.isSea) return;
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          withinRadius.add(neighbor);
          nextFrontier.push(neighbor);
        }
      });
    });
    frontier = nextFrontier;
  }
  return withinRadius;
}

function isSubmarineDetected(state, subTerritoryName, subOwnerId, viewerPlayerId, gameData, houseRules) {
  const subOwnerSide = gameData.players.find(p => p.id === subOwnerId).side;
  const viewerSide = gameData.players.find(p => p.id === viewerPlayerId).side;

  if (subOwnerSide === viewerSide) return true;
  if (!houseRules.toggles.submarineConcealment.enabled) return true;

  const radius = houseRules.toggles.submarineConcealment.detectionRadius;
  const adjacencyMap = buildAdjacencyMap(gameData);
  const nearbyZones = seaZonesWithinRadius(subTerritoryName, radius, adjacencyMap, gameData);
  nearbyZones.add(subTerritoryName);

  for (const zoneName of nearbyZones) {
    const zone = state.territories[zoneName];
    if (!zone) continue;
    const hasDestroyer = zone.units.some(u => u.type === 'destroyer' && u.owner === viewerPlayerId);
    if (hasDestroyer) return true;
  }
  return false;
}

// --- Per-player filtered view ---
// Returns a deep-cloned state with undetected enemy submarines removed.
// This is what should actually be sent to each player's client in multiplayer.

function getPlayerView(state, viewerPlayerId, gameData, houseRules) {
  const view = deepClone(state);
  Object.values(view.territories).forEach(t => {
    t.units = t.units.filter(function (u) {
      if (u.type !== 'submarine') return true;
      if (u.owner === viewerPlayerId) return true;
      return isSubmarineDetected(state, t.name, u.owner, viewerPlayerId, gameData, houseRules);
    });
  });
  return view;
}

// --- Exports (attach to global scope for plain <script> usage) ---

const GameEngine = {
  PHASE_NAMES,
  PHASE_DISPLAY,
  initGameState,
  getCurrentPlayerId,
  getCurrentPhase,
  canAct,
  advancePhase,
  isSubmarineDetected,
  getPlayerView,
  deepClone
};
