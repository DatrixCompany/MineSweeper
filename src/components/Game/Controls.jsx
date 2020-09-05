import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Button, InputField } from '../Common';
import { ROUTES } from '../../utils';
import { StyledControls, ControlsLayout } from './styled';
import { MODES, defaultSettings } from './utils';

const Controls = ({ mode = MODES.PLAYING, onNewGame, usedFlags = 0, mines = 0, toggleVirtual }) => {
  const history = useHistory();
  const [settings, setSettings] = useState(defaultSettings);

  const handleInput = (e, fieldName) => {
    setSettings({ ...settings, [fieldName]: e.target.value });
  };

  return (
    <ControlsLayout>
      <StyledControls>
        <InputField
          onChange={(e) => handleInput(e, 'width')}
          placeholder="Grid Width"
          title="Width:"
          value={settings.width}
        />
        <InputField
          onChange={(e) => handleInput(e, 'height')}
          placeholder="Grid Height"
          title="Height:"
          value={settings.height}
        />
        <InputField
          onChange={(e) => handleInput(e, 'mines')}
          placeholder="Mines Amount"
          title="Mines:"
          value={settings.mines}
        />
      </StyledControls>

      <StyledControls>
        <Button
          label="Rules"
          onClick={() => history.push(ROUTES.BASE)}
          disabled={mode === MODES.PLAYING}
        />
        <Button label="Superman" onClick={() => onNewGame({ ...settings, isSuperman: true })} />
        <Button label="Reset" onClick={() => onNewGame(settings)} />
      </StyledControls>
      <StyledControls>
        <div>
          <span>{`${mines - usedFlags}  🚩 Remaining`}</span>
        </div>
        <div>
          <span>{`${mines} 💣 Total`}</span>
        </div>
        <Button label="Virtual" onClick={toggleVirtual} />
      </StyledControls>
    </ControlsLayout>
  );
};

Controls.propTypes = {
  mode: PropTypes.string.isRequired,
  mines: PropTypes.number.isRequired,
  usedFlags: PropTypes.number.isRequired,
  onNewGame: PropTypes.func.isRequired,
  toggleVirtual: PropTypes.func.isRequired,
};

export default Controls;
