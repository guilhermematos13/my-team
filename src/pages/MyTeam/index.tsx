import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MenuBanner } from '../../components/MenuBanner';
import { LineUpsModal } from '../../partials/MyTeamPartials/LineUpsModal';
import { PlayersModal } from '../../partials/MyTeamPartials/PlayersModal';
import { StatisticModal } from '../../partials/MyTeamPartials/StatisticModal';
import { Container, MenuContainer } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { MyTeamContext } from '../../context/MyTeamContext';
import { Loading } from '../../components/Loading';
import { toast } from 'react-hot-toast';

export function MyTeam() {
  const { info } = useContext(MyTeamContext);
  const [loading, setLoading] = useState(true);
  const [team, setTeam] = useState<TeamData>();

  const navigate = useNavigate();
  console.log(info);

  useEffect(() => {
    const fetchTeam = async () => {
      api
        .get(`teams/team/${info?.team}`)
        .then((response) => {
          info?.team && response.data.api.teams
            ? setTeam(response.data.api.teams[info?.team])
            : (toast.error('Não conseguimos achar seu time'),
              navigate('/selecao-time'));
        })
        .catch(() => {
          toast.error('Algo deu errado!');
          navigate('/selecao-time');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTeam();
  }, [info, navigate]);

  if (!team || loading) return <Loading width={100} />;
  return (
    <div>
      <Header teamTitle={team?.name} team logo={team.logo} />
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
