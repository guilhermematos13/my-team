import { Header } from '../../components/Header';
import { MenuBanner } from '../../components/MenuBanner';
import { LineUpsModal } from '../../partials/MyTeamPartials/LineUpsModal';
import { PlayersModal } from '../../partials/MyTeamPartials/PlayersModal';
import { StatisticModal } from '../../partials/MyTeamPartials/StatisticModal';
import { Container, MenuContainer } from './styles';
import * as Dialog from '@radix-ui/react-dialog';

export function MyTeam() {
  return (
    <div>
      <Header teamTitle="São Paulo" team />
      <Container>
        <MenuContainer>
          <Dialog.Root>
            <LineUpsModal />
            <MenuBanner
              title="Formações"
              buttonTitle="Clique aqui para ver as formações"
            />
          </Dialog.Root>
          <Dialog.Root>
            <StatisticModal />
            <MenuBanner
              title="Estatísticas"
              buttonTitle="Clique aqui para ver as estatísticas"
            />
          </Dialog.Root>
          <Dialog.Root>
            <PlayersModal />
            <MenuBanner
              title="Jogadores"
              buttonTitle="Clique aqui para ver os jogadores"
            />
          </Dialog.Root>
        </MenuContainer>
      </Container>
    </div>
  );
}
