import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  team?: boolean;
  teamTitle: string;
  logo?: string;
}

export function Header({ team, teamTitle, logo }: HeaderProps) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('token');
    navigate('/');
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
