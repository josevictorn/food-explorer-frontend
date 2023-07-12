import styled from "styled-components";

export const FooterContainer = styled.footer`
  max-height: 7.7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  padding: 2.8rem 10%;

  > img {
    height: 1.6rem;
  }

  > p {
    font-size: 1rem;
  }
`;