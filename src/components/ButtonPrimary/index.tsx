import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { ArrowCircleRight } from '@phosphor-icons/react';

interface ButtonPrimaryProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    isBack?: boolean;
}

export function ButtonPrimary({ title, isBack, ...props }: ButtonPrimaryProps) {
    return (
        <ButtonStyled {...props}>
            {title}
            {!isBack && <ArrowCircleRight size={32} />}
        </ButtonStyled>
    );
}
