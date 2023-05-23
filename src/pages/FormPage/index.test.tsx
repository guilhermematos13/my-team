import { screen, render } from '@testing-library/react';
import { FormPage } from '.';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

describe('FormPage', () => {
    it('should be view elements on the page', () => {
        const { container } = render(<FormPage />);

        expect(screen.getByText('Selecione as opções abaixo:')).toBeInTheDocument();
        expect(screen.getByText('País')).toBeInTheDocument();
        expect(screen.getByText('Temporada')).toBeInTheDocument();
        expect(screen.getByText('Ligas')).toBeInTheDocument();
        expect(screen.getByText('Escolha seu time')).toBeInTheDocument();
        expect(screen.getByText('Time')).toBeInTheDocument();
        expect(screen.getAllByText('Carregando...')).toHaveLength(2);
        expect(screen.getByText('Selecione uma liga')).toBeInTheDocument();
        expect(screen.getByText('Selecione um time')).toBeInTheDocument();
        expect(container.querySelector('button')).toBeInTheDocument();
        expect(container.querySelectorAll('svg')).toHaveLength(4);
    });
});
