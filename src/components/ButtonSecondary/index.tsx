import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ButtonStyled } from './styles';

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  title: string;
}

export function ButtonSecondary({
  icon,
  title,
  ...props
}: ButtonSecondaryProps) {
  return (
    <ButtonStyled {...props}>
      {title}
      {icon}
    </ButtonStyled>
  );
}
