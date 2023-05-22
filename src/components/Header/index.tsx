import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';

interface HeaderProps {
  team?: boolean;
  teamTitle: string;
  logo?: string;
}

export function Header({ team, teamTitle, logo }: HeaderProps) {
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
      <button>
        Sair
        <SignOut />
      </button>
    </Container>
  );
}
