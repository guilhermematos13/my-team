import { Keyhole } from '@phosphor-icons/react';
import { Input } from '../../components/Input';
import { Container, LoginStyled, Title } from './styles';
import { ButtonPrimary } from '../../components/ButtonPrimary';

export function Login() {
  return (
    <Container>
      <LoginStyled>
        <Title>API Key</Title>
        <Input
          icon={<Keyhole size={32} />}
          placeholder="Insira a chave de autenticação"
        />
        <div>
          <ButtonPrimary type="submit" />
        </div>
      </LoginStyled>
    </Container>
  );
}
