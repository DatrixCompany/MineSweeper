import React from 'react';
import PropTypes from 'prop-types';
import { StyledGrid } from './styled';
import Cell from './Cell';

const Grid = ({ gridData = [[]], gridState = [[]], width, onCellClick }) => {
  const cells = gridData.map((row, corY) =>
    row.map((minesCount, corX) => (
      <Cell
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

export default Grid;
