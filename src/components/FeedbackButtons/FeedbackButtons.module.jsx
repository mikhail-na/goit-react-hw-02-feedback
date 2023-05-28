import styled from '@emotion/styled';

export const ButtonList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  gap: 40px;

  margin-top: 40px;
  padding: 0;
`;

export const ButtonItem = styled.li`
display: flex;
align-items: center;
`;

export const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;



  border-radius: 5px;
  padding: 0.25em 1em;
`;