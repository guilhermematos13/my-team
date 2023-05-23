import { X } from '@phosphor-icons/react';
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
            <Dialog.Content className="fixed bg-[#2B2B2B] max-h-[80vh] sm:w-auto sm:min-w-[768px] xs:w-full px-11 py-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-lg shadow-black/25">
                <div className="flex gap-8 justify-between mb-6">
                    <div className="w-8" />
                    <Dialog.Title className="text-2xl text-[#DBDBDB] font-bold xs:text-base">{title}</Dialog.Title>
                    <Dialog.Close className="text-[#DBDBDB]">
                        <X size={32} />
                    </Dialog.Close>
                </div>
                {children}
            </Dialog.Content>
        </Dialog.Portal>
    );
}
