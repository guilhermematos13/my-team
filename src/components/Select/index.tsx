import * as Select from '@radix-ui/react-select';
import { Container, SelectTitle } from './styles';
import { CaretDown } from '@phosphor-icons/react';
import { forwardRef } from 'react';

interface SelectFormProps {
  placeholder: string;
  title: string;
}

const SelectItem = forwardRef(({ children, ...props }: any, forwardRef) => {
  return (
    <Select.Item {...props} ref={forwardRef}>
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  );
});

export function SelectForm({ placeholder, title }: SelectFormProps) {
  return (
    <Container>
      <SelectTitle>{title}</SelectTitle>
      <Select.Root>
        <Select.Trigger
          aria-label="country"
          className="inline-flex items-center justify-between rounded-lg p-4 leading-[1] outline-none w-[590px] bg-[#1E1E1E] text-[#DBDBDB]"
        >
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <CaretDown size={32} />
          </Select.Icon>
        </Select.Trigger>
        <Select.Content className="overflow-hidden bg-[#1E1E1E] p-4 text-base w-[590px] rounded-lg">
          <Select.Group>
            <SelectItem value="Brasil" className="p-4 text-[#DBDBDB]">
              Brasil
            </SelectItem>
            <SelectItem value="Argentina" className="p-4 text-[#DBDBDB]">
              Argentina
            </SelectItem>
            <SelectItem value="Inglaterra" className="p-4 text-[#DBDBDB]">
              Inglaterra
            </SelectItem>
          </Select.Group>
        </Select.Content>
      </Select.Root>
    </Container>
  );
}
