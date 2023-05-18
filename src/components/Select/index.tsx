import * as Select from '@radix-ui/react-select';
import { Container, SelectTitle } from './styles';
import { CaretDown, Check } from '@phosphor-icons/react';
import { forwardRef } from 'react';

interface SelectFormProps {
  placeholder: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SelectItem = forwardRef(({ children, ...props }: any, forwardRef) => {
  return (
    <Select.Item {...props} ref={forwardRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <Check size={20} />
      </Select.ItemIndicator>
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
        <Select.Content
          position="popper"
          className="bg-[#1E1E1E] p-4 text-base w-[590px] max-h-[500px] -mt-1 rounded-b-lg"
        >
          <Select.Viewport className="p-1">
            <Select.Group>
              <SelectItem
                value="Brasil"
                className="flex justify-between p-4 text-[#DBDBDB]"
              >
                Brasil
              </SelectItem>
              <SelectItem
                value="Argentina"
                className="flex justify-between p-4 text-[#DBDBDB]"
              >
                Argentina
              </SelectItem>
              <SelectItem
                value="Inglaterra"
                className="flex justify-between p-4 text-[#DBDBDB]"
              >
                Inglaterra
              </SelectItem>
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Root>
    </Container>
  );
}
