import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { getPlayersInterface } from './interface';

export const fetchPlayers = async ({ info, setPlayersList, getHeaders }: getPlayersInterface) => {
    api.get('v3/players', {
        params: {
            team: info?.team,
            season: info?.season,
        },
        headers: getHeaders,
    })
        .then(response => {
            setPlayersList(response.data.response);
        })
        .catch(() => {
            toast.error('Algo deu errado');
        });
};
