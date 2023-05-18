import { Modal } from '../../../components/Modal';
import { Content, Header } from './styles';

export function StatisticModal() {
  return (
    <Modal title="Estatisticas">
      <Content>
        <strong>Total de jogos</strong>
        <p>38</p>
      </Content>
      <Content>
        <strong>Vitórias</strong>
        <p>16</p>
      </Content>
      <Content>
        <strong>Empates</strong>
        <p>6</p>
      </Content>
      <Content>
        <strong>Derrotas</strong>
        <p>14</p>
      </Content>
    </Modal>
  );
}
