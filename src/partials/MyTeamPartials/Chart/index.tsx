import { useContext, useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { MyTeamContext } from '../../../context/MyTeamContext';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryStack } from 'victory';
import { ChartContainer } from './styles';
import { toast } from 'react-hot-toast';
import { Loading } from '../../../components/Loading';

interface GoalsData {
  x: string;
  label: string;
  y: number;
}

type GoalsDataResponse = {
  [key: string]: {
    title: string;
    percentage: string;
    total: string;
  };
};

export function Chart() {
  const [loading, setLoading] = useState<boolean>(true);
  const [goalsList, setGoalsList] = useState<GoalsData[]>([]);
  const { info } = useContext(MyTeamContext);

  useEffect(() => {
    function fetchGoalsList() {
      api
        .get('v3/teams/statistics', {
          params: {
            league: info?.league,
            season: info?.season,
            team: info?.team,
          },
        })
        .then((response) => {
          const goalsPercentage =
            response.data?.response?.goals?.for?.minute &&
            Object.entries(
              response.data.response.goals.for.minute as GoalsDataResponse
            ).map(([key, value]) => {
              return {
                x: key,
                y: value.total,
                label: value.total,
              };
            });
          setGoalsList(goalsPercentage);
        })
        .catch(() => {
          toast.error('Algo deu errado ao carregar os graficos');
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchGoalsList();
  }, [info?.league, info?.season, info?.team]);

  return (
    <ChartContainer>
      <h2>Quantidade de gols marcados por tempo de jogo:</h2>
      {loading ? (
        <Loading width={50} />
      ) : (
        <VictoryChart
          horizontal
          height={500}
          width={window.innerWidth}
          padding={{ top: 50, bottom: 50, left: 100, right: 100 }}
        >
          <VictoryStack
            style={{
              data: { width: 40 },
              labels: { fontSize: 20, fill: '#DBDBDB' },
            }}
          >
            <VictoryBar
              style={{
                data: { fill: '#00875F' },
              }}
              data={goalsList}
              labels={({ datum }) => `${datum.y}%`}
            />
          </VictoryStack>
          <VictoryAxis
            style={{
              axis: { stroke: 'white' },
              tickLabels: { fontSize: 20, fill: 'white' },
            }}
          />
        </VictoryChart>
      )}
    </ChartContainer>
  );
}
