import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { MyTeamContext } from '../../context/MyTeamContext';

interface HeaderProps {
    team?: boolean;
    teamTitle: string;
    logo?: string;
}

export function Header({ team, teamTitle, logo }: HeaderProps) {
    const navigate = useNavigate();
    const { setToken } = useContext(MyTeamContext);

    function logout() {
        localStorage.removeItem('token');
        setToken(undefined);
        return new Promise(resolve => {
            const interval = setInterval(() => {
                const item = localStorage.getItem('token');
                if (!item) {
                    clearInterval(interval);
                    resolve(item);
                    navigate('/');
                }
            }, 100);
        });
    }

    return (
        <Container>
            {team ? (
                <div className="withTeam">
                    <img src={logo} />
                </div>
            ) : (
                <div className="withoutTeam" />
            )}
            <strong>{teamTitle}</strong>
            <button onClick={logout}>
                Sair
                <SignOut />
            </button>
        </Container>
    );
}
