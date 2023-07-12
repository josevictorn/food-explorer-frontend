import { ButtonTextContainer } from './styles';

export function ButtonText({ icon:Icon, title, ...rest }) {
  return(
    <ButtonTextContainer
      type="button"
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </ButtonTextContainer>
  );
}