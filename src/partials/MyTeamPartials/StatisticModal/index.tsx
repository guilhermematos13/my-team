import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { Content } from './styles';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { api } from '../../../services/api';
import { toast } from 'react-hot-toast';

export function StatisticModal() {
  const [getStatistic, setGetStatistic] = useState<StatisticData>();
  const { info } = useContext(MyTeamContext);

  useEffect(() => {
    const fetchLineUps = async () => {
      api
        .get('v3/teams/statistics', {
          params: {
            team: info?.team,
            season: info?.season,
            league: info?.league,
          },
        })
        .then((response) => {
          const fixtures: StatisticDataResponse =
            response.data.response.fixtures;
          fixtures &&
            setGetStatistic({
              wins: fixtures.wins.total,
              played: fixtures.played.total,
              loses: fixtures.loses.total,
              draws: fixtures.draws.total,
            });
        })
        .catch(() => {
          toast.error('Algo deu errado');
        });
    };
    fetchLineUps();
  }, [info?.season, info?.team, info?.league]);

  return (
    <Modal title="Estatísticas">
      <Content>
        <strong>Total de jogos</strong>
        <p>{getStatistic?.played}</p>
      </Content>
      <Content>
        <strong>Vitórias</strong>
        <p>{getStatistic?.wins}</p>
      </Content>
      <Content>
        <strong>Empates</strong>
        <p>{getStatistic?.draws}</p>
      </Content>
      <Content>
        <strong>Derrotas</strong>
        <p>{getStatistic?.loses}</p>
      </Content>
    </Modal>
  );
}
