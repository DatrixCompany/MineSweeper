import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../Common';
import { ROUTES } from '../../utils';

const OnBoard = () => {
  const history = useHistory();

  return (
    <div style={{ padding: '3rem' }}>
      <h1>Welcome to Minesweeper</h1>
      <p style={{ maxWidth: '80rem' }}>
        If you're a Windows' user chances are that you already have the game on your computer. This
        guide will help you in completing your first game. The rule of the game is simple, the
        number on a block shows the number of mines adjacent to it and you have to flag all the
        mines.
      </p>
      <h4>Few Game Rules:</h4>
      <ul>
        <li>
          <strong>Flag:</strong> Put a flag in a zone when you have confirmed that there is a mine.
        </li>
        <li>
          <strong>Superman:</strong> Play new game with all cells revealed!
        </li>
        <li>
          <strong>Rest:</strong> Click it if you want to reset the game
        </li>
      </ul>
      <a
        href="https://www.instructables.com/id/How-to-play-minesweeper/"
        rel="noopener noreferrer"
        target="_blank"
      >
        For more information about Minesweeper
      </a>
      <Button
        label="Click to start playing"
        style={{ marginTop: '2rem' }}
        onClick={() => history.push(ROUTES.PLAY)}
      />
      <p style={{ marginTop: '2rem' }}>Made by Eylon Mizrahi</p>
    </div>
  );
};

export default OnBoard;
