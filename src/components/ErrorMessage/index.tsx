import { ReactNode } from 'react';

interface ErrorMessageProps {
    children: ReactNode;
}

export function ErrorMessage({ children }: ErrorMessageProps) {
    return (
        <div className="w-full text-left ">
            <p className="text-red-600 -mt-3 text-left">{children}</p>
        </div>
    );
}
