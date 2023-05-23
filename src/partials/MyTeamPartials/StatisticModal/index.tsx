import { Modal } from '../../../components/Modal';
import { Content } from './styles';

export function StatisticModal({ getStatistic }: StatisticProps) {
  return (
    <Modal title="Estatísticas">
      <Content>
        <strong>Total de jogos</strong>
        <p>{getStatistic?.played || '-'}</p>
      </Content>
      <Content>
        <strong>Vitórias</strong>
        <p>{getStatistic?.wins || '-'}</p>
      </Content>
      <Content>
        <strong>Empates</strong>
        <p>{getStatistic?.draws || '-'}</p>
      </Content>
      <Content>
        <strong>Derrotas</strong>
        <p>{getStatistic?.loses || '-'}</p>
      </Content>
    </Modal>
  );
}
