import { Header } from '../../components/Header';
import { MenuBanner } from '../../components/MenuBanner';
import { Container, MenuContainer } from './styles';

export function MyTeam() {
  return (
    <div>
      <Header teamTitle="São Paulo" team />
      <Container>
        <MenuContainer>
          <MenuBanner
            title="Formações"
            buttonTitle="Clique aqui para ver as formações"
          />
          <MenuBanner
            title="Estatísticas"
            buttonTitle="Clique aqui para ver as estatísticas"
          />
          <MenuBanner
            title="Jogadores"
            buttonTitle="Clique aqui para ver os jogadores"
          />
        </MenuContainer>
      </Container>
    </div>
  );
}
