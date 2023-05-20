import { CaretDown } from '@phosphor-icons/react';
import { Container, SelectTitle, Select, IconWrapper } from './styles';
import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
interface SelectFormProps extends SelectHTMLAttributes<HTMLSelectElement> {
  title: string;
  placeholder: string;
  options: { value: string; label: string }[];
}

export const InputSelect = forwardRef(
  (
    { title, options, placeholder, ...props }: SelectFormProps,
    ref: ForwardedRef<never>
  ) => {
    return (
      <Container>
        <SelectTitle>{title}</SelectTitle>
        <div>
          <Select placeholder={placeholder} {...props} {...ref}>
            <option disabled selected value="">
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <IconWrapper>
            <CaretDown size={32} />
          </IconWrapper>
        </div>
      </Container>
    );
  }
);
