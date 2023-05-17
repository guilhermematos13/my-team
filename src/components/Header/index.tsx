import { SignOut } from '@phosphor-icons/react';
import { Container } from './styles';

export function Header() {
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
