import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { SelectForm } from '../../components/Select';
import { ButtonContainer, Container, FormContainer, Title } from './styles';

export function FormPage() {
  return (
    <div>
      <Header />
      <Container>
        <FormContainer>
          <Title>Selecione as opções abaixo:</Title>
          <SelectForm title="País" placeholder="Selecione o País" />
          <SelectForm title="Temporada" placeholder="Selecione a temporada" />
          <SelectForm title="Liga" placeholder="Selecione a Liga" />
          <SelectForm title="Time" placeholder="Selecione o Time" />
          <ButtonContainer>
            <ButtonPrimary />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
}
