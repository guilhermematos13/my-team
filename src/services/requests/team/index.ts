import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { getTeamByLeagueAndBySeasonInterface, getTeamInterface } from './interface';

export const fetchTeam = async ({ info, setTeam, setLoading, navigate, getHeaders }: getTeamInterface) => {
    api.get(`teams/team/${info?.team}`, { headers: getHeaders })
        .then(response => {
            info?.team && response.data.api.teams
                ? setTeam(response.data.api.teams[info?.team])
                : (toast.error('Não conseguimos achar seu time'), navigate('/selecao-time'));
        })
        .catch(() => {
            toast.error('Algo deu errado!');
            navigate('/selecao-time');
        })
        .finally(() => {
            setLoading(false);
        });
};

export const fetchTeamsByLeagueAndBySeason = ({
    leagueId,
    seasonId,
    setTeamLoading,
    setTeamsList,
    getHeaders,
}: getTeamByLeagueAndBySeasonInterface) => {
    setTeamLoading(true);
    api.get(`v3/teams`, {
        params: {
            league: leagueId,
            season: seasonId,
        },
        headers: getHeaders,
    })
        .then(response => {
            const teams =
                response.data.response &&
                response.data.response.map((data: TeamsDataResponse) => {
                    return {
                        value: data.team.id,
                        label: data.team.name,
                    };
                });
            setTeamsList(teams);
        })
        .catch(() => {
            toast.error('Algo deu errado ao buscar os times');
        })
        .finally(() => {
            setTeamLoading(false);
        });
};
