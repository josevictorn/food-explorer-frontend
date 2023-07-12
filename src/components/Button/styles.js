import styled from "styled-components";
export const ButtonContainer = styled.button`
  width: 100%;
  padding: 12px 0;

  text-align: center;

  background-color: ${({ theme, isSecondary }) => isSecondary ? theme.COLORS.DARK_800 : theme.COLORS.TOMATO_100};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};
  
  border: 0;
  border-radius: 5px;

  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_200};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
    cursor: not-allowed;
  }
`;