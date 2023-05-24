import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { GoalsDataResponse, StatisticDataResponse, getLineUpStatisticsInterface } from './interface';

export const fetchLineUps = async ({
    info,
    setGetStatistic,
    setGoalsList,
    setLineUpList,
    getHeaders,
}: getLineUpStatisticsInterface) => {
    api.get('v3/teams/statistics', {
        params: {
            team: info?.team,
            season: info?.season,
            league: info?.league,
        },
        headers: getHeaders,
    })
        .then(response => {
            const fixtures: StatisticDataResponse = response.data.response.fixtures;
            fixtures &&
                setGetStatistic({
                    wins: fixtures.wins.total,
                    played: fixtures.played.total,
                    loses: fixtures.loses.total,
                    draws: fixtures.draws.total,
                });

            const goalsPercentage =
                response.data?.response?.goals?.for?.minute &&
                Object.entries(response.data.response.goals.for.minute as GoalsDataResponse).map(([key, value]) => {
                    return {
                        x: key,
                        y: value.total,
                        label: value.total,
                    };
                });
            setGoalsList(goalsPercentage);
            setLineUpList(response.data.response.lineups);
        })
        .catch(() => {
            toast.error('Algo deu errado');
        });
};
