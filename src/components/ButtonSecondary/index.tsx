import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { SoccerBall } from '@phosphor-icons/react';

interface ButtonSecondaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

export function ButtonSecondary({ title, ...props }: ButtonSecondaryProps) {
  return (
    <ButtonStyled {...props}>
      {title}
      <SoccerBall size={32} />
    </ButtonStyled>
  );
}
