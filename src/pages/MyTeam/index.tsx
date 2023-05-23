import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { MenuBanner } from '../../components/MenuBanner';
import { LineUpsModal } from '../../partials/MyTeamPartials/LineUpsModal';
import { PlayersModal } from '../../partials/MyTeamPartials/PlayersModal';
import { StatisticModal } from '../../partials/MyTeamPartials/StatisticModal';
import { ChartContainer, Container, MenuContainer } from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import { useContext, useEffect, useState } from 'react';
import { MyTeamContext } from '../../context/MyTeamContext';
import { LoadingScreen } from '../../components/LoadingScreen';
import { Chart } from '../../partials/MyTeamPartials/Chart';
import { fetchTeam } from '../../services/requests/team';
import { fetchLineUps } from '../../services';
import { ButtonPrimary } from '../../components/ButtonPrimary';

export function MyTeam() {
    const navigate = useNavigate();
    const { info } = useContext(MyTeamContext);
    const [loading, setLoading] = useState(true);
    const [team, setTeam] = useState<TeamData>();
    const [getStatistic, setGetStatistic] = useState<StatisticData>();
    const [goalsList, setGoalsList] = useState<GoalsData[]>([]);
    const [lineUpList, setLineUpList] = useState<LineUpsData[]>([]);

    useEffect(() => {
        fetchTeam({ info, navigate, setLoading, setTeam });
        fetchLineUps({ info, setGetStatistic, setGoalsList, setLineUpList });
    }, [info, navigate]);

    if (loading) return <LoadingScreen width={100} />;
    return (
        <div>
            <Header teamTitle={team?.name as string} team logo={team?.logo as string} />
            <Container>
                <MenuContainer>
                    <Dialog.Root>
                        <LineUpsModal lineUpList={lineUpList} />
                        <MenuBanner title="Formações" buttonTitle="Clique aqui para ver as formações" />
                    </Dialog.Root>
                    <Dialog.Root>
                        <StatisticModal getStatistic={getStatistic} />
                        <MenuBanner title="Estatísticas" buttonTitle="Clique aqui para ver as estatísticas" />
                    </Dialog.Root>
                    <Dialog.Root>
                        <PlayersModal />
                        <MenuBanner title="Jogadores" buttonTitle="Clique aqui para ver os jogadores" />
                    </Dialog.Root>
                </MenuContainer>
                <ChartContainer>
                    <Chart goalsList={goalsList} loading={loading} />
                    <ButtonPrimary
                        title="Voltar"
                        isBack
                        onClick={() => {
                            navigate('/selecao-time');
                        }}
                    />
                </ChartContainer>
            </Container>
        </div>
    );
}
