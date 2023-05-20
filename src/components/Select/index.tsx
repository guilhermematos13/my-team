import clsx from 'clsx';
import { Container, SelectTitle } from './styles';
import { ForwardedRef, SelectHTMLAttributes, forwardRef } from 'react';
import Select from 'react-select';

interface SelectFormProps extends SelectHTMLAttributes<HTMLSelectElement> {
  placeholder: string;
  title: string;
  options: { value: string; label: string }[];
}

const controlStyles = {
  base: 'rounded-lg bg-[#1E1E1E] hover:cursor-pointer p-4 text-[#DBDBDB]',
  focus: 'border border-[#00875F]',
  nonFocus: 'border-[#00875F]',
};
const placeholderStyles = 'text-[#898888] pl-1 py-0.5';
const selectInputStyles = 'pl-1 py-0.5';
const valueContainerStyles = 'p-1 gap-1';
const singleValueStyles = 'leading-7 ml-1';
const indicatorsContainerStyles = 'p-1 gap-3';
const indicatorSeparatorStyles = 'bg-[#00875F]';
const dropdownIndicatorStyles =
  'p-1 hover:bg-[#00875F] text-gray-500 rounded-md hover:text-[#DBDBDB]';
const menuStyles = 'p-2 mt-1 border border-gray-200 bg-white rounded-lg';
const optionStyles = {
  base: 'hover:cursor-pointer px-3 py-2 rounded hover:bg-[#D7F9EF]',
  focus: 'bg-gray-100 active:bg-[#D7F9EF] bg-[#D7F9EF]',
  selected:
    "after:content-['✔'] after:ml-2 after:text-green-500 text-gray-500 ",
};
const noOptionsMessageStyles =
  'text-gray-500 p-2 bg-gray-50 border border-dashed border-gray-200 rounded-sm';

export const SelectForm = forwardRef(
  (
    { placeholder, title, options }: SelectFormProps,
    ref: ForwardedRef<never>
  ) => {
    return (
      <Container>
        <SelectTitle>{title}</SelectTitle>
        <Select
          ref={ref}
          placeholder={placeholder}
          options={options}
          noOptionsMessage={({ inputValue }) =>
            !inputValue && 'Nenhum resultado'
          }
          unstyled
          classNames={{
            control: ({ isFocused }) =>
              clsx(
                isFocused ? controlStyles.focus : controlStyles.nonFocus,
                controlStyles.base
              ),
            placeholder: () => placeholderStyles,
            input: () => selectInputStyles,
            valueContainer: () => valueContainerStyles,
            singleValue: () => singleValueStyles,
            indicatorsContainer: () => indicatorsContainerStyles,
            indicatorSeparator: () => indicatorSeparatorStyles,
            dropdownIndicator: () => dropdownIndicatorStyles,
            menu: () => menuStyles,
            option: ({ isFocused, isSelected }) =>
              clsx(
                isFocused && optionStyles.focus,
                isSelected && optionStyles.selected,
                optionStyles.base
              ),
            noOptionsMessage: () => noOptionsMessageStyles,
          }}
        />
      </Container>
    );
  }
);
