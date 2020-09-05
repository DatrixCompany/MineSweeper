import styled from 'styled-components/macro';

export const GameLayout = styled.div``;

export const ControlsLayout = styled.div`
  width: 400px;
  margin: 5rem auto;
`;

export const StyledControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ width }) => width}, auto);
  justify-content: center;
  overflow: scroll;
`;

export const StyledCell = styled.button`
  width: 3rem;
  height: 3rem;
  text-align: center;
  border: 1px solid black;
  background-color: ${({ color }) => color};
  opacity: ${({ $revealed }) => ($revealed ? 0.5 : 0.8)};
`;
