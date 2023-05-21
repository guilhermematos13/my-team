import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';

interface HeaderProps {
  team?: boolean;
  teamTitle: string;
}

export function Header({ team, teamTitle }: HeaderProps) {
  return (
    <Container>
      {team ? (
        <div className="withTeam">
          <img src="https://media-1.api-sports.io/football/teams/126.png" />
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
