import React from 'react';
import PropTypes from 'prop-types';
import { StyledCell } from './styled';
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

const Cell = ({ minesCount, state, corX, corY, onClick, style }) => {
  return (
    <StyledCell
      style={style}
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

Cell.propTypes = {
  minesCount: PropTypes.number.isRequired,
  state: PropTypes.number.isRequired,
  corX: PropTypes.number.isRequired,
  corY: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default MemoCell;
