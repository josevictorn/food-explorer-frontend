import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({theme}) => theme.COLORS.DARK_900};
  color: ${({theme}) => theme.COLORS.LIGHT_500};

  border-radius: 5px;

  > input {
    width: 100%;

    padding: 1.6rem 1.4rem;

    background: transparent;
    color: ${({theme}) => theme.COLORS.LIGHT_100};


    border: 0;

    &::placeholder {
      color: ${({theme}) => theme.COLORS.LIGHT_500};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;