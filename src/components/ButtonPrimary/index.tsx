import { ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
  title: string;
  icon: ReactNode;
}

export function ButtonPrimary({ title, icon }: ButtonProps) {
  return (
    <ButtonStyled>
      {title}
      {icon}
    </ButtonStyled>
  );
}
