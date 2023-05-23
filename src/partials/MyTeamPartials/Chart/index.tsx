import { VictoryChart, VictoryBar, VictoryAxis, VictoryStack } from 'victory';
import { TitleStyled } from './styles';
import { Loading } from '../../../components/Loading';

export function Chart({ goalsList, loading }: ChartProps) {
  return (
    <>
      <TitleStyled>Quantidade de gols marcados por tempo de jogo:</TitleStyled>
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
    </>
  );
}
