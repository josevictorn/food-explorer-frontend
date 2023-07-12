import styled, { css } from "styled-components";

export const MenuMobileContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  inset: 0;
  z-index: 5;

  opacity: 0;
  pointer-events: none;

  transition: .2s;

  display: grid;
  grid-template-rows: auto 1fr auto;

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
  `}
  
  background-color: ${({ theme }) => theme.COLORS.DARK_400};
  @media (min-width: 1050px) {
    display: none;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  padding: 5.6rem 10% 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  > p {
    font-size: 2.2rem;
    line-height: 2.4rem;
  }

  > button {
    display: flex;
    background: transparent;
    border: 0;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 3.6rem 10% 0;

  > div {
    margin-bottom: 3.6rem;
  }

  > button {
    background: transparent;
    padding: 1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};

    text-align: left;
    font-size: 2rem;
  }
`;