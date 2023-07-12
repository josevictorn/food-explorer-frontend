import styled from "styled-components";

export const Container = styled.section`
  margin-left: 2.4rem;

  > h2 {
    font-weight: 500;
    font-size: 1.8rem;

    margin-bottom: 2.4rem;

    animation: topdown 700ms;
  }

  .swiper-slide {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;
    margin-bottom: 2.4rem;

    animation: topdown 700ms 300ms backwards;

    height: 29.2rem;
    max-width: 21rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_200};

    border: 2px solid ${({ theme }) => theme.COLORS.DARK_300};
    border-radius: 8px;

    padding: 0 2.4rem;

    > button {
      background: transparent;
      border: none;

      position: absolute;
      right: 1.6rem;
      top: 1.6rem;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > img {
      width: 8.8rem;
      height: 8.8rem;
    }

    > a {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      font-weight: 500;
      font-size: 1.4rem;
      line-height: 2.4rem;
    }

    > p {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;

      color: ${({ theme }) => theme.COLORS.CAKE_200};
    }

    .stepper {
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
    }

    > div {
      display: flex;
      gap: 1.6rem;

      > button {
        padding: 1.2rem 2.4rem;
      }
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
    margin-left: 10%;
    .swiper-slide {
      height: 36.2rem;
      max-width: 25.4rem;
      margin-bottom: 4.8rem;

      > img {
        width: 14.4rem;
        height: 14.4rem;
      }

      > a {
        font-weight: 700;
        font-size: 1.6rem;
        line-height: 1.5rem;
      }

      > p {
        font-size: 1.8rem;
      }
    }
  }

  @media(min-width: 680px) {
    margin: 0 10%;
  }
`;