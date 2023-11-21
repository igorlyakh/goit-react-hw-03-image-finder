import styled from 'styled-components';

export const Btn = styled.button`
  display: flex;
  margin: 35px auto;
  border: none;
  background-color: blue;
  color: #ffffff;
  width: 100px;
  height: 30px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 250ms ease;
  &:hover {
    background-color: #2460bf;
  }
`;
