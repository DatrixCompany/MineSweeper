import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid, StyledCell } from './styled';
import { CELL_STATE } from './utils';

const getDisplayElement = (minesCount, state) => {
  switch (state) {
    case CELL_STATE.FLAGGED:
      return '🚩';
    case CELL_STATE.REVEALED:
      return minesCount === Infinity ? '💣' : minesCount || '';
    default:
      return '';
  }
};

const Cell = ({ minesCount, state, corX, corY, onClick }) => {
  return (
    <StyledCell
      onClick={() => onClick(corX, corY)}
      disabled={state === CELL_STATE.REVEALED}
      color={state === CELL_STATE.REVEALED && minesCount === Infinity ? 'red' : 'grey'}
      $revealed={state === CELL_STATE.REVEALED}
    >
      <span style={{ color: minesCount > 1 ? 'red' : 'white', fontWeight: 600 }}>
        {getDisplayElement(minesCount, state)}
      </span>
    </StyledCell>
  );
};

const MemoCell = React.memo(
  Cell,
  (prevProps, nextProps) =>
    prevProps.state === nextProps.state && prevProps.minesCount === nextProps.minesCount,
);

const Grid = ({ gridData = [[]], gridState = [[]], width, onCellClick }) => {
  const cells = gridData.map((row, corY) =>
    row.map((minesCount, corX) => (
      <MemoCell
        key={`${corX}-${corY}`}
        minesCount={minesCount}
        state={gridState[corY][corX]}
        corX={corX}
        corY={corY}
        onClick={onCellClick}
      />
    )),
  );
  return <StyledGrid width={width}>{cells}</StyledGrid>;
};

Grid.propTypes = {
  width: PropTypes.number.isRequired,
  gridData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  gridState: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

Cell.propTypes = {
  minesCount: PropTypes.number.isRequired,
  state: PropTypes.number.isRequired,
  corX: PropTypes.number.isRequired,
  corY: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Grid;
