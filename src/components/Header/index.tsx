import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';

interface HeaderProps {
  team?: boolean;
}

export function Header({ team }: HeaderProps) {
  if (team) {
    return (
      <Container>
        <div className="withTeam">
          <img src="https://media-1.api-sports.io/football/teams/126.png" />
        </div>
        <strong>Escolha seu time</strong>
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
