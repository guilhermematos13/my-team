import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { getLeaguesInterface } from './interface';

export const fetchLeagues = ({ setLeagueLoading, setLeaguesList, countryName }: getLeaguesInterface) => {
    setLeagueLoading(true);
    api.get(`v3/leagues`, {
        params: {
            country: countryName,
        },
    })
        .then(response => {
            const leagues =
                response.data.response &&
                response.data.response.map((value: LeagueDataResponse) => {
                    return {
                        value: value.league.id,
                        label: value.league.name,
                    };
                });
            setLeaguesList(leagues);
        })
        .catch(() => {
            toast.error('Algo deu errado ao buscar as ligas');
        })
        .finally(() => {
            setLeagueLoading(false);
        });
};
