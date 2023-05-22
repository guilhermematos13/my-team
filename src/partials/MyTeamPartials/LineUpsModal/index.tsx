import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { Content, Header } from './styles';
import { api } from '../../../services/api';
import { toast } from 'react-hot-toast';

interface lineUpsData {
  formation: string;
  played: number;
}

export function LineUpsModal() {
  const [lineUpList, setLineUpList] = useState([]);
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
          setLineUpList(response.data.response.lineups);
        })
        .catch(() => {
          toast.error('Algo deu errado');
        });
    };
    fetchLineUps();
  }, [info?.season, info?.team, info?.league]);

  return (
    <Modal title="Formações">
      <Header>
        <strong>Formação</strong>
        <strong>Vezes utilizadas</strong>
      </Header>

      {lineUpList &&
        lineUpList.map((data: lineUpsData) => {
          return (
            <Content key={data.formation}>
              <p>{data.formation}</p>
              <p>{data.played} vez(es)</p>
            </Content>
          );
        })}
    </Modal>
  );
}
