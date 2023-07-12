import { ButtonContainer } from "./styles";

export function Button({ title, isSecondary,...rest }) {
  return(
    <ButtonContainer
      type="button"
      isSecondary={isSecondary}
      {...rest}
    >
      {title}
    </ButtonContainer>
  );
}