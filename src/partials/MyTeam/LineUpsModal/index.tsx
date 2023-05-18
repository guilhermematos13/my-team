import { Modal } from '../../../components/Modal';
import { Content, Header } from './styles';

export function LineUpsModal() {
  return (
    <Modal title="Formações">
      <Header>
        <strong>Formação</strong>
        <strong>Vezes utilizadas</strong>
      </Header>
      <Content>
        <p>4.3.2.1</p>
        <p>34</p>
      </Content>
      <Content>
        <p>4.3.2.1</p>
        <p>34</p>
      </Content>
      <Content>
        <p>4.3.2.1</p>
        <p>34</p>
      </Content>
    </Modal>
  );
}
