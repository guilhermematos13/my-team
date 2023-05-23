import { InputHTMLAttributes, ReactNode } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  placeholder: string;
}

export function Input({ icon, placeholder, ...props }: InputProps) {
  return (
    <Container>
      {icon && icon}
      <input placeholder={placeholder} {...props} />
    </Container>
  );
}
