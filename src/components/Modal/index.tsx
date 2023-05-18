import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';

interface ModalProps {
  title: string;
  children: ReactNode;
}

export function Modal({ title, children }: ModalProps) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
      <Dialog.Content className="fixed bg-[#2B2B2B] px-11 py-6 top--1/2 left-1/2 -translate-x-1/2 -traslate-y-1/2 rounded-lg shadow-lg shadow-black/25">
        <Dialog.Title className="text-2xl text-[#DBDBDB]">{title}</Dialog.Title>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
