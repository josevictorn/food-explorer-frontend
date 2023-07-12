import styled from "styled-components";

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.4rem;

  > button {
    display: flex;
    background: transparent;
    border: none;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > span {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
  }
`;