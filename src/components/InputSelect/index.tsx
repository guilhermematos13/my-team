import { CaretDown } from '@phosphor-icons/react';
import { Container, SelectTitle, Select, IconWrapper } from './styles';
import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
interface SelectFormProps extends SelectHTMLAttributes<HTMLSelectElement> {
    title: string;
    placeholder: string;
    options: { value: string; label: string }[];
    loading?: boolean;
}

export const InputSelect = forwardRef(
    ({ title, options, placeholder, loading, ...props }: SelectFormProps, ref: ForwardedRef<never>) => {
        return (
            <Container>
                <SelectTitle>{title}</SelectTitle>
                {loading ? (
                    <Select disabled>
                        <option>Carregando...</option>
                    </Select>
                ) : (
                    <div>
                        <Select placeholder={placeholder} {...props} {...ref}>
                            <option disabled value="">
                                {placeholder}
                            </option>
                            {options.map((option, index) => (
                                <option key={index} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </Select>
                        <IconWrapper>
                            <CaretDown size={32} />
                        </IconWrapper>
                    </div>
                )}
            </Container>
        );
    },
);
