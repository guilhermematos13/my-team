import { Keyhole } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Container, LoginStyled, Title } from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const navigate = useNavigate();

  return (
    <Container>
      <LoginStyled>
        <Title>API Key</Title>
        <Input
          icon={<Keyhole />}
          type="text"
          placeholder="Insira sua chave de autenticação"
        />
        <div>
          <ButtonPrimary
            type="submit"
            title="Entrar"
            onClick={() => {
              navigate('/selecao-time');
            }}
          />
        </div>
      </LoginStyled>
    </Container>
  );
}
