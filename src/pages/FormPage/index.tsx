import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { ButtonContainer, Container, FormContainer, Title } from './styles';
import { useForm } from 'react-hook-form';
import { InputSelect } from '../../components/InputSelect';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function FormPage() {
  const [countryList, setCountryList] = useState<SelectData[]>();
  const [seasonsList, setSeasonsList] = useState<SelectData[]>();

  const { handleSubmit, register, watch, setValue } = useForm({
    defaultValues: {
      country: '',
      season: '',
      league: '',
      team: '',
    },
  });
  const navigate = useNavigate();

  const isDisabledSeason = watch('country') === '' || watch('country') === '';
  const isDisabledLeague = watch('country') === '' || watch('season') === '';
  const isDisabledTeam =
    watch('country') === '' || watch('season') === '' || watch('league') === '';

  const onSubmit = (data: FormDataInterface) => {
    console.log(data);
    //navigate('/meu-time');
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

  function FetchSeasons() {
    api
      .get('seasons')
      .then((response) => {
        const seasons =
          response.data.api.seasons &&
          Object.entries(response.data.api.seasons).map((season) => {
            return { value: season[0], label: season[1] };
          });
        setSeasonsList(seasons);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function FetchCountries() {
    api
      .get('v3/countries')
      .then((response) => {
        const countries =
          response.data.response &&
          response.data.response.map((country: CountriesData) => {
            return { value: country.name, label: country.name };
          });
        setCountryList(countries);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    FetchCountries();
    FetchSeasons();
  }, []);

  return (
    <div>
      <Header />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Selecione as opções abaixo:</Title>
          <InputSelect
            {...register('country')}
            placeholder="Selecione um país"
            title="País"
            options={countryList || []}
            onChange={(event) => {
              setValue('country', event.target.value);
            }}
          />
          <InputSelect
            title="Temporada"
            disabled={isDisabledSeason}
            placeholder="Selecione uma temporada"
            options={seasonsList || []}
            {...register('season')}
            onChange={(event) => {
              setValue('season', event.target.value);
            }}
          />
          <InputSelect
            title="Ligas"
            disabled={isDisabledLeague}
            placeholder="Selecione uma liga"
            options={options}
            {...register('league')}
            onChange={(event) => {
              setValue('league', event.target.value);
            }}
          />
          <InputSelect
            title="Time"
            disabled={isDisabledTeam}
            placeholder="Selecione um time"
            options={options}
            {...register('team')}
            onChange={(event) => {
              setValue('team', event.target.value);
            }}
          />

          <ButtonContainer>
            <ButtonPrimary type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
}
