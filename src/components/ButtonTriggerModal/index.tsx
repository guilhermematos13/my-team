import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { SoccerBall } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';

interface ButtonTriggerModalProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
}

export function ButtonTriggerModal({ title, ...props }: ButtonTriggerModalProps) {
    return (
        <Dialog.Trigger>
            <ButtonStyled {...props}>
                <SoccerBall size={32} />
                {title}
            </ButtonStyled>
        </Dialog.Trigger>
    );
}
