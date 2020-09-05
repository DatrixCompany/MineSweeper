export const MODES = {
  PLAYING: 'playing',
  LOST: 'lost',
  WON: 'won',
};

export const CELL_STATE = {
  REVEALED: 1,
  HIDDEN: 0,
  FLAGGED: -1,
};

export const defaultSettings = { width: 50, height: 50, mines: 200, isSuperman: false };

const formatSettings = ({ width, height, mines, isSuperman }) => {
  return { width: Number(width), height: Number(height), mines: Number(mines), isSuperman };
};

export const validateSettings = (settings) => {
  const { width, height, mines, isSuperman } = formatSettings(settings);
  const isValidWidth = width > 0 && width <= 300;
  const isValidHeight = height > 0 && height <= 300;
  const isValidMines = mines > 0 && mines <= width * height;
  const isValid = isValidWidth && isValidHeight && isValidMines;
  const error = isValid ? false : 'Allowed Settings: Height, Width up to 300, mines up to 90,000';
  return [error, { width, height, mines, isSuperman }];
};

export const getEmptyGridData = ({ width, height }) => {
  const emptyRow = Array(width).fill(0);
  const emptyGrid = Array(height)
    .fill(null)
    .map(() => [...emptyRow]);
  return emptyGrid;
};

export const generateMinesCordinates = ({ width, height, mines }) => {
  const minesCordinates = [];
  const possibleCordinates = {};
  while (minesCordinates.length < mines) {
    const randomX = Math.floor(Math.random() * width);
    const randomY = Math.floor(Math.random() * height);
    const isTakenSpace = possibleCordinates[randomX] && possibleCordinates[randomX][randomY];
    if (!isTakenSpace) {
      possibleCordinates[randomX] = { ...possibleCordinates[randomX], [randomY]: true };
      minesCordinates.push([randomX, randomY]);
    }
  }
  return minesCordinates;
};

const getCellNeighbors = ([xCor, yCor], { width, height }) => {
  const nearBy = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
  ];
  const neighbors = nearBy.reduce((validNeighbors, [nearByX, nearByY]) => {
    const neighborXcor = xCor + nearByX;
    const neighborYcor = yCor + nearByY;
    const inXrange = neighborXcor >= 0 && neighborXcor < width;
    const inYrange = neighborYcor >= 0 && neighborYcor < height;
    if (inXrange && inYrange) {
      return [...validNeighbors, [neighborXcor, neighborYcor]];
    } else {
      return validNeighbors;
    }
  }, []);
  return neighbors;
};

const updateNeighborsMinesCount = (minesCordinates, grid, settings) => {
  const updatedGrid = grid.map((row) => [...row]);
  minesCordinates.forEach(([xCor, yCor]) => {
    updatedGrid[yCor][xCor] = Infinity;
    const neighbors = getCellNeighbors([xCor, yCor], settings);
    neighbors.forEach(
      ([neighborXcor, neighborYcor]) => (updatedGrid[neighborYcor][neighborXcor] += 1),
    );
  });
  return updatedGrid;
};

export const getMappedGridData = (settings) => {
  const emptyGrid = getEmptyGridData(settings);
  const gridInitalState = emptyGrid.map((row) => [...row]);
  const minesCordinates = generateMinesCordinates(settings);
  const mappedGrid = updateNeighborsMinesCount(minesCordinates, emptyGrid, settings);
  return [mappedGrid, gridInitalState];
};

const getNeighborsToReveal = ([xCor, yCor], { gridState, settings }) => {
  const neighbors = getCellNeighbors([xCor, yCor], settings);
  const neighborsToReveal = neighbors.filter(([neighborXcor, neighborYcor]) => {
    const isHidden = gridState[neighborYcor][neighborXcor] === CELL_STATE.HIDDEN;
    const isFlagged = gridState[neighborYcor][neighborXcor] === CELL_STATE.FLAGGED;
    return isHidden && !isFlagged;
  });
  return neighborsToReveal;
};

export const hash = ([x, y]) => 0.5 * (x + y) * (x + y + 1) + y;

export const revealCells = (neighborsToReveal = [[]], { gridData, gridState, settings }) => {
  const newGridState = gridState.map((row) => [...row]);

  const alreadyChecked = new Map();
  while (neighborsToReveal.length > 0) {
    const newNighbors = [];
    neighborsToReveal.forEach(([corX, corY]) => {
      newGridState[corY][corX] = CELL_STATE.REVEALED;
      if (gridData[corY][corX] > 0) return;

      const neighbors = getNeighborsToReveal([corX, corY], {
        gridState: newGridState,
        settings,
      });

      const realNewNeighbors = neighbors.filter((cor) => !alreadyChecked.has(hash(cor)));

      newNighbors.push(...realNewNeighbors);
      neighbors.forEach((cor) => alreadyChecked.set(hash(cor), true));
    });

    neighborsToReveal = newNighbors;
  }
  return newGridState;
};

export const checkIfWon = (flags = new Map(), gridData = [[]]) =>
  Array.from(flags.values()).every(
    ([flagXcor, flagYcor]) => gridData[flagYcor][flagXcor] === Infinity,
  );

export const handleFlags = ({
  flags = new Map(),
  gridState = [[]],
  isFlagRemoved,
  cordinates: [corX, corY],
}) => {
  const newGridState = gridState.map((row) => [...row]);
  const newFlagsState = new Map(flags);
  const flagHash = hash([corX, corY]);
  if (isFlagRemoved) {
    newFlagsState.delete(flagHash, [corX, corY]);
    newGridState[corY][corX] = CELL_STATE.HIDDEN;
  } else {
    newFlagsState.set(flagHash, [corX, corY]);
    newGridState[corY][corX] = CELL_STATE.FLAGGED;
  }
  return { newGridState, newFlagsState };
};
