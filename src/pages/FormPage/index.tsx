import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { ButtonContainer, Container, FormContainer, Title } from './styles';
import { SubmitHandler, useForm } from 'react-hook-form';
import { InputSelect } from '../../components/InputSelect';

export function FormPage() {
  const { handleSubmit, register, watch } = useForm({
    defaultValues: {
      country: '',
      season: '',
      league: '',
      team: '',
    },
  });
  const navigate = useNavigate();

  const isDisabledSeason = watch('country') === '';
  const isDisabledLeague = watch('country') === '' || watch('season') === '';
  const isDisabledTeam =
    watch('country') === '' || watch('season') === '' || watch('league') === '';

  const onSubmit = (data: FormDataInterface) => {
    console.log(data);
    navigate('/meu-time');
  };

  const options = [
    {
      value: 'Brazil',
      label: 'Brazil',
    },
    {
      value: 'Argentina',
      label: 'Argentina',
    },
    {
      value: 'England',
      label: 'England',
    },
  ];

  return (
    <div>
      <Header />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Selecione as opções abaixo:</Title>
          <InputSelect
            placeholder="Selecione um país"
            title="País"
            options={options}
            {...register('country')}
          />
          <InputSelect
            title="Temporada"
            disabled={isDisabledSeason}
            placeholder="Selecione uma temporada"
            options={options}
            {...register('season')}
          />
          <InputSelect
            title="Ligas"
            disabled={isDisabledLeague}
            placeholder="Selecione uma liga"
            options={options}
            {...register('league')}
          />
          <InputSelect
            title="Time"
            disabled={isDisabledTeam}
            placeholder="Selecione um time"
            options={options}
            {...register('team')}
          />

          <ButtonContainer>
            <ButtonPrimary type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
}
