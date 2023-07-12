import styled from "styled-components";

export const HeaderMobileContainer = styled.header`
  display: flex;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 10% 2.4rem;

  > img {
    height: 3rem;
  }

  > button {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: 0;

    position: relative;

    > span {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      right: -5px;
      top: -5px;

      width: 2rem;
      height: 2rem;

      background-color: ${({ theme }) => theme.COLORS.TOMATO_100};

      border-radius: 50%;
    }
  }

  @media (min-width: 1050px) {
    display: none;
  }  
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 2.8rem 10%;

  > img {
    height: 3rem;
  }

  > button {
    max-width: 21.6rem;
  }
  
  @media (max-width: 1050px) {
    display: none;

    > img {
      height: 2rem;
    }
  }
`;

export const Logout = styled.button`
  background: transparent;
  border: 0;

  color: ${({ theme }) => theme.COLORS.LIGHT_100};

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;