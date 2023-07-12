import styled, { css } from "styled-components";

export const HomeContainer = styled.div`

`;

export const Content = styled.main`
  min-height: calc(100vh - 7.7rem - 15.1rem);
`;

export const Banner = styled.div`
  max-width: 37.6rem;
  height: 12rem;

  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  margin: 4.4rem auto 6.2rem;

  padding: 3.6rem .8rem 2.2rem 15.3rem;

  border-radius: 3px;

  animation: topdown 600ms;

  position: relative;

  > img {
    width: 19.1rem;
    height: 14.9rem;

    position: absolute;
    bottom: 0;
    left: -3rem;
  }

  > div {
    > h2 {
      font-size: 1.8rem;
      line-height: 140%;
      font-weight: 600;

      margin-bottom: .3rem;
    }

    > p {
      font-size: 1.2rem;
      line-height: 140%;
    }
  }

  @keyframes topdown {
    0% {
      opacity: 0;
      transform: translateY(-15px);
    }
    
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media(min-width: 470px) {
    max-width: 100%;

    margin: 4.4rem 10% 6.2rem;;
  }
`;