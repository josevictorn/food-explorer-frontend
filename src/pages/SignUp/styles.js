import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7.3rem;

  width: 80%;
  margin: auto;

  > img {
    margin-top: 15.8rem;
    height: 3.8rem;
  } 

  @media (min-width: 950px) {
    height: 100vh;
    max-width: 1122px;
    
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > img {
      margin-top: 0;
      height: 4.8rem;
      animation: leftdown 700ms;
    }

    @keyframes leftdown {
      0% {
        opacity: 0;
        transform: translateX(-15px);
      }
      
      100% {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`; 

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  animation: rightdown 700ms 200ms backwards;

  > h1 {
    display: none;
  }

  > a {
    text-align: center;
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  } 

  @keyframes rightdown {
    0% {
      opacity: 0;
      transform: translateX(15px);
    }
    
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media(min-width: 950px) {
    width: 47.6rem;
    padding: 6.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    border-radius: 1.6rem;

    .input-wrapper {
      display: flex;
      flex-direction: column;
      gap: .8rem;

      > label {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
      }
    }
    
    > h1 {
      display: inline;
      text-align: center;
      font-weight: 500;
      font-size: 3.2rem;
    }
  }
`;