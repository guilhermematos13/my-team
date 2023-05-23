import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { Header, PlayerInfo } from './styles';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { fetchPlayers } from '../../../services';

export function PlayersModal() {
    const [playersList, setPlayersList] = useState<PlayersData[]>([]);
    const { info } = useContext(MyTeamContext);

    useEffect(() => {
        fetchPlayers({
            info,
            setPlayersList,
        });
    }, [info]);

    return (
        <Modal title="Jogadores">
            <Header>
                <strong>Nome do Jogador</strong>
                <strong>Idade</strong>
                <strong>País</strong>
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
