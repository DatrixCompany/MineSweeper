import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

export const Input = styled.input`
  padding: 0 1.5rem;
  height: 2.5rem;
  width: 5rem;

  ::placeholder {
    color: #ababab;
  }

  :disabled {
    color: #c7c7c7;
    background-color: #f6f6f6;
  }
`;

export const FieldLabel = styled.label`
  display: block;
  padding: 0;
  margin: 0;
`;

export const FieldTitle = styled.span`
  display: block;
  margin-bottom: 1rem;
  font-weight: 500;
  font-size: 14px;
  color: #494949;
`;

export const InputField = ({ title, ...inputProps }) => {
  return (
    <FieldLabel>
      {title && <FieldTitle>{title}</FieldTitle>}
      <Input {...inputProps} />
    </FieldLabel>
  );
};

InputField.propTypes = {
  title: PropTypes.string,
};
