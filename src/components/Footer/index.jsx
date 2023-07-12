import logoImg from '../../assets/logo-food-explorer-footer.svg';

import { FooterContainer } from "./styles";

export function Footer() {
  return(
    <FooterContainer>
      <img src={logoImg} />

      <p>&#169; 2023 - Todos os direitos reservados.</p>
    </FooterContainer>
  );
}