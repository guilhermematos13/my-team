import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { Header, PlayerInfo } from './styles';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { api } from '../../../services/api';
import { toast } from 'react-hot-toast';

export function PlayersModal() {
  const [playersList, setPlayersList] = useState<PlayersData[]>([]);
  const { info } = useContext(MyTeamContext);

  useEffect(() => {
    const fetchPlayers = async () => {
      api
        .get('v3/players', {
          params: {
            team: info?.team,
            season: info?.season,
          },
        })
        .then((response) => {
          setPlayersList(response.data.response);
        })
        .catch(() => {
          toast.error('Algo deu errado');
        });
    };
    fetchPlayers();
  }, [info?.season, info?.team]);

  return (
    <Modal title="Jogadores">
      <Header>
        <strong>Nome do Jogador</strong>
        <strong>Idade</strong>
        <strong>Nacionalidade</strong>
      </Header>
      <div className="max-h-[50vh] overflow-y-auto">
        {playersList.map((playerInfo: PlayersData) => {
          return (
            <PlayerInfo key={playerInfo.player.id}>
              <p>{playerInfo.player.name}</p>
              <p>{playerInfo.player.age} anos</p>
              <p>{playerInfo.player.nationality}</p>
            </PlayerInfo>
          );
        })}
      </div>
    </Modal>
  );
}
