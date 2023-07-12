import styled from "styled-components";

export const DishContainer = styled.main`
  margin: 3.2rem 10%;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.6rem;

    animation: topdown 700ms;
    
    > img {
      width: 32.0rem;
    }

    > section {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      text-align: center;

      > h2 {
        font-size: 2.4rem;
        line-height: 3.2rem;
        font-weight: 500;
      }

      > p {
        font-size: 1.6rem;
        line-height: 2.4rem;
      }

      .ingredients {
        display: flex;
        flex-flow: row wrap;
        gap: 1.2rem;
      }

      .buy {
        display: flex;
        gap: 1.6rem;
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
  }

  @media(min-width: 720px) {
    height: calc(100vh - 17.1rem - 7.7rem);
    margin: 3.2rem 10%;

    .content {
      max-width: 1024px;
      margin: 4.2rem auto 0;
      flex-direction: row;
      gap: 8.4rem;

      > img {
        width: 34rem;
      }

      > section {
        max-width: 64rem;
        text-align: left;

        > h2 {
          font-size: 3.6rem;
        }

        > p {
          font-size: 1.8rem;
        }
      }
    }

    .buy {
      max-width: 29.4rem;
      margin-top: 2.4rem;
    }
  }
`;

export const IngredientContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.DARK_1000};
  border-radius: 4px;

  padding: .4rem .8rem;
`;