import { screen, render } from '@testing-library/react';
import { MyTeam } from '.';
import React, { Dispatch } from 'react';

const mockNavigate = jest.fn();
const mockTeam = jest.fn().mockReturnValue({
    'green-500': '',
});

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
}));

jest.mock('styled-components', () => ({
    ...jest.requireActual('styled-components'),
    useTheme: () => mockTeam,
}));

describe('MyTeam Page', () => {
    const setIsLoading: Dispatch<unknown> = jest.fn();
    const isLoading: unknown = false;
    xit('should be view elements on the page', () => {
        const { container } = render(<MyTeam />);
        const useStateSpy = jest.spyOn(React, 'useState').mockReturnValue([isLoading, setIsLoading]);

        expect(screen.getByText('Formações')).toBeInTheDocument();
        expect(screen.getByText('Estatísticas')).toBeInTheDocument();
        expect(screen.getByText('Jogadores')).toBeInTheDocument();
        expect(screen.getByText('Sair')).toBeInTheDocument();
        expect(screen.getByText('Quantidade de gols marcados por tempo de jogo:')).toBeInTheDocument();
        expect(container.querySelectorAll('button')).toHaveLength(8);
        expect(container.querySelectorAll('svg')).toHaveLength(6);
        expect(container.querySelector('img')).toBeInTheDocument();
        expect(useStateSpy).toHaveBeenCalled();
    });
});
