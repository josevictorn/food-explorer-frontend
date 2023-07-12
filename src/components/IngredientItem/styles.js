import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 3.2rem;
  padding: 0 .8rem;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.LIGHT_600};
  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
  border-radius: 8px;

  > button {
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.LIGHT_100}
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.LIGHT_500}
  }

  > input {
    width: 100%;

    color: ${({ theme}) => theme.COLORS.LIGHT_100};
    background: transparent;

    border: none;
  }
`;