import { useContext, useEffect, useState } from 'react';
import { Modal } from '../../../components/Modal';
import { Header, PlayerInfo } from './styles';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { fetchPlayers } from '../../../services';
import { EmptyMessage } from '../../../components/Empty';

export function PlayersModal() {
    const [playersList, setPlayersList] = useState<PlayersData[]>([]);
    const { info, getHeaders } = useContext(MyTeamContext);

    useEffect(() => {
        fetchPlayers({
            info,
            setPlayersList,
            getHeaders,
        });
    }, [info, getHeaders]);

    return (
        <Modal title="Jogadores">
            <Header>
                <strong>Nome do Jogador</strong>
                <strong>Idade</strong>
                <strong>País</strong>
            </Header>
            <div className="max-h-[50vh] overflow-y-auto">
                {playersList.length ? (
                    playersList.map((playerInfo: PlayersData) => {
                        return (
                            <PlayerInfo key={playerInfo.player.id}>
                                <p>{playerInfo.player.name}</p>
                                <p>{playerInfo.player.age} anos</p>
                                <p>{playerInfo.player.nationality}</p>
                            </PlayerInfo>
                        );
                    })
                ) : (
                    <EmptyMessage />
                )}
            </div>
        </Modal>
    );
}
