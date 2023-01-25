import styled from 'styled-components';

export const Button = styled.button`
  padding: 2px 10px;
  border-radius: 5px;
  height: 30px;
  font-size: 14px;
  // background-color: #ffcbcb;
  background-color: #f76b8a;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  transition-duration: 250ms;
  &:hover {
    background-color: #ffb5b5;
  }
`;
