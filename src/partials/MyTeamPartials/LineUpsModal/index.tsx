import { Modal } from '../../../components/Modal';
import { Content, Header } from './styles';

export function LineUpsModal({ lineUpList }: { lineUpList: LineUpsData[] }) {
    return (
        <Modal title="Formações">
            <Header>
                <strong>Formação</strong>
                <strong>Vezes utilizadas</strong>
            </Header>
            <div className="max-h-[50vh] overflow-y-auto">
                {lineUpList &&
                    lineUpList.map((data: LineUpsData) => {
                        return (
                            <Content key={data.formation}>
                                <p>{data.formation}</p>
                                <p>{data.played} vez(es)</p>
                            </Content>
                        );
                    })}
            </div>
        </Modal>
    );
}
