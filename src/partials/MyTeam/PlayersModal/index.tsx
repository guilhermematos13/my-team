import { Modal } from '../../../components/Modal';
import { Header, PlayerInfo } from './styles';

export function PlayersModal() {
  return (
    <Modal title="Jogadores">
      <Header>
        <strong>Nome do Jogador</strong>
        <strong>Idade</strong>
        <strong>Nacionalidade</strong>
      </Header>
      <div className="max-h-[50vh] overflow-y-auto">
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
        <PlayerInfo>
          <p>Guilherme Matos de Oliveira</p>
          <p>24 anos</p>
          <p>Brasil</p>
        </PlayerInfo>
      </div>
    </Modal>
  );
}
