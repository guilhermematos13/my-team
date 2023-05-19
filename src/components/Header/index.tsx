import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';

interface HeaderProps {
  team?: boolean;
  teamTitle?: string;
}

export function Header({ team, teamTitle }: HeaderProps) {
  if (team) {
    return (
      <Container>
        <div className="withTeam">
          <img src="https://media-1.api-sports.io/football/teams/126.png" />
        </div>
        <strong>{teamTitle}</strong>
        <button>
          Sair
          <SignOut />
        </button>
      </Container>
    );
  }
  return (
    <Container>
      <div></div>
      <strong>Escolha seu time</strong>
      <button>
        Sair
        <SignOut />
      </button>
    </Container>
  );
}
