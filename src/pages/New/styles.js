import styled from "styled-components";

export const NewContainer = styled.div`
`;

export const Content = styled.main`
  margin: 4.2rem 10%;

  animation: topdown 700ms;

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
`;

export const Form = styled.form`
  margin-bottom: 4.8rem;
  > h2 {
    font-weight: 500;
    font-size: 3.2rem;
    margin: 2.2rem 0 3.2rem;
  }

  input[type='file'] {
    display: none;
  }

  input[type='file'] + label {
    display: flex;
    gap: .8rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_900};

    padding: 1.4rem 1.6rem;

    border-radius: 4px;

    cursor: pointer;
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: .8rem;

    &:not(:first-child) {
      margin-top: 1.6rem;
    }

    .react-select__control {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border: none;
      height: 4.8rem;
      color: ${({ theme }) => theme.COLORS.LIGHT_400};

      .react-select__placeholder {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }

      .react-select__single-value {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      .react-select__input-container {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }

    .react-select__menu {
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_400};
    }

    .input-price {
      padding: 1.4rem 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      border: none;
      border-radius: 4px;
    }
  }

  > button {
    margin-top: 1.6rem;
  }

  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h2 {
      margin-bottom: 0;
    }

    .input-group {
      display: flex;
      gap: 3.2rem;
    }

    .input-group-two {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 3.2rem;
    }

    .input-wrapper {
      width: 100%;
      &:not(:first-child) {
        margin-top: 0;
      }
    }

    > button {
      width: auto;
      padding: 1.2rem 2.4rem;
      margin-left: auto;
    }
  }
`;

export const InputIngridients = styled.div`
  display: flex;
  gap: 1.6rem;
  padding: .8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 4px;
`;