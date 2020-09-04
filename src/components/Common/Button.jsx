import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Btn = styled.button`
  display: block;
  height: 3rem;
  padding: 0.5rem 2rem;
  border-left: solid 6px var(--main-color);
  color: var(--main-color);
  font-weight: bold;

  :disabled {
    cursor: not-allowed;
    color: #b5b5b5;
    background-color: #e6e6e6;
  }

  :active {
    transform: translateY(2px);
  }
`;

export const Button = ({ label, onClick, disabled = false, type = 'button', style }) => (
  <Btn onClick={onClick} disabled={disabled} type={type} style={style}>
    {label}
  </Btn>
);

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
};
