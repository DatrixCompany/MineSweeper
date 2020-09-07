import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'react-virtualized';
import Cell from './Cell';

const VirtualGrid = ({ gridData = [[]], gridState = [[]], onCellClick }) => {
  const height = window.innerHeight - 400;
  const width = window.innerWidth;
  const boxed = Math.min(height, width);
  const length = Math.max(boxed, 300);
  return (
    <Grid
      cellRenderer={({ key, rowIndex, columnIndex, style }) => {
        return (
          <Cell
            key={key}
            style={style}
            minesCount={gridData[rowIndex][columnIndex]}
            state={gridState[rowIndex][columnIndex]}
            corX={columnIndex}
            corY={rowIndex}
            onClick={onCellClick}
          />
        );
      }}
      columnCount={gridData[0].length}
      rowCount={gridData.length}
      columnWidth={30}
      rowHeight={30}
      height={length}
      width={length}
      style={{ margin: '0 auto', overflow: 'scroll' }}
    />
  );
};

VirtualGrid.propTypes = {
  width: PropTypes.number.isRequired,
  gridData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  gridState: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  onCellClick: PropTypes.func.isRequired,
};

export default VirtualGrid;
