import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { ArrowCircleRight } from '@phosphor-icons/react';

type ButtonPrimaryProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonPrimary({ ...props }: ButtonPrimaryProps) {
  return (
    <ButtonStyled {...props}>
      Entrar
      <ArrowCircleRight size={32} />
    </ButtonStyled>
  );
}
