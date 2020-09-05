import React, { useEffect, useReducer } from 'react';
import Controls from './Controls';
import Grid from './Grid';
import VirtualGrid from './VirtualGrid';
import { GameLayout } from './styled';
import {
  MODES,
  defaultSettings,
  validateSettings,
  revealCells,
  getMappedGridData,
  CELL_STATE,
  checkIfWon,
  handleFlags,
} from './utils';

const initialState = {
  mode: MODES.PLAYING,
  flags: new Map(),
  settings: defaultSettings,
  gridData: [[]],
  gridState: [[]],
  isShiftDown: false,
  isVirtualGrid: true,
};

const ACTIONS = {
  NEW_GAME: 'new_game',
  SHIFT_DOWN: 'shift_down',
  GAME_MODE: 'game_mode',
  CELL_CLICK: 'cell_click',
  TOGGLE_VIRTUAL: 'toggle_virtual',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SHIFT_DOWN: {
      return { ...state, isShiftDown: payload };
    }
    case ACTIONS.NEW_GAME: {
      const settings = payload || state.settings;

      const [mappedGrid, gridInitalState] = getMappedGridData(settings);
      const newState = {
        ...initialState,
        settings,
        gridData: mappedGrid,
        gridState: gridInitalState,
      };
      if (settings.isSuperman) {
        const revealedData = gridInitalState.map((row) => row.fill(CELL_STATE.REVEALED));
        return { ...newState, gridState: revealedData };
      }
      return newState;
    }
    case ACTIONS.GAME_MODE: {
      return { ...state, mode: payload };
    }
    case ACTIONS.CELL_CLICK: {
      const [corX, corY] = payload;
      const { flags, gridData, gridState, settings, isShiftDown, mode } = state;

      if (mode !== MODES.PLAYING) return state;
      if (!isShiftDown && gridState[corY][corX] === CELL_STATE.FLAGGED) return state;
      if (isShiftDown) {
        const isFlagRemoved = gridState[corY][corX] === CELL_STATE.FLAGGED;
        if (!isFlagRemoved && flags.size === settings.mines) {
          alert('Cant add any more flags');
          return state;
        }
        const { newGridState, newFlagsState } = handleFlags({
          flags,
          gridState,
          isFlagRemoved,
          cordinates: [corX, corY],
        });

        return { ...state, flags: newFlagsState, gridState: newGridState };
      } else {
        const newGridState = revealCells([[corX, corY]], state);
        const didLose = gridData[corY][corX] === Infinity;
        if (didLose) alert('You Lost');

        return { ...state, gridState: newGridState, mode: didLose ? MODES.LOST : MODES.PLAYING };
      }
    }
    case ACTIONS.TOGGLE_VIRTUAL:
      return { ...state, isVirtualGrid: !state.isVirtualGrid };
    default:
      return state;
  }
};

const Game = () => {
  const [state, dispath] = useReducer(reducer, initialState);
  const { flags, gridData, gridState, settings, mode, isVirtualGrid } = state;

  const handleNewGame = (settings = defaultSettings) => {
    const [errorMessage, newSettings] = validateSettings(settings);
    if (errorMessage) {
      alert(errorMessage);
    } else {
      dispath({ type: ACTIONS.NEW_GAME, payload: newSettings });
    }
  };

  useEffect(handleNewGame, []);

  useEffect(() => {
    if (flags.size === settings.mines) {
      const won = checkIfWon(flags, gridData);
      if (won) {
        alert('You Won');
        dispath({ type: ACTIONS.GAME_MODE, payload: MODES.WON });
      }
    }
  }, [flags.size, settings.mines]);

  const handleCellClick = (corX, corY) => {
    dispath({ type: ACTIONS.CELL_CLICK, payload: [corX, corY] });
  };

  const toggleVirtual = () => dispath({ type: ACTIONS.TOGGLE_VIRTUAL });

  const handleKeyDown = (e) => {
    if (e.key === 'Shift') {
      dispath({ type: ACTIONS.SHIFT_DOWN, payload: true });
    }
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Shift') {
      dispath({ type: ACTIONS.SHIFT_DOWN, payload: false });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <GameLayout>
      <Controls
        usedFlags={flags.size}
        mines={settings.mines}
        mode={mode}
        onNewGame={handleNewGame}
        toggleVirtual={toggleVirtual}
      />
      {isVirtualGrid ? (
        <VirtualGrid gridData={gridData} gridState={gridState} onCellClick={handleCellClick} />
      ) : (
        <Grid
          width={settings.width}
          gridData={gridData}
          gridState={gridState}
          onCellClick={handleCellClick}
        />
      )}
    </GameLayout>
  );
};

export default Game;
