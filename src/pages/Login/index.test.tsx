import { screen, render } from '@testing-library/react';
import { Login } from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('Login Page', () => {
    it('should be view elements on the page', () => {
        const { container } = render(<Login />);

        expect(screen.getByText('API Key')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Insira sua chave de autenticação')).toBeInTheDocument();
        expect(container.querySelector('input')).toBeInTheDocument();
        expect(container.querySelectorAll('svg')).toHaveLength(2);
        expect(container.querySelector('button')).toBeInTheDocument();
    });
});
