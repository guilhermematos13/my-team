import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { ArrowCircleRight } from '@phosphor-icons/react';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function ButtonPrimary({ title, ...props }: ButtonPrimaryProps) {
  return (
    <ButtonStyled {...props}>
      {title}
      <ArrowCircleRight size={32} />
    </ButtonStyled>
  );
}
