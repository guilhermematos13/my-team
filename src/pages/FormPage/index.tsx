import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { ButtonContainer, Container, FormContainer, Title } from './styles';
import { useForm } from 'react-hook-form';
import { InputSelect } from '../../components/InputSelect';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';

export function FormPage() {
  const [countriesList, setCountriesList] = useState<SelectData[]>([]);
  const [seasonsList, setSeasonsList] = useState<SelectData[]>([]);
  const [leaguesList, setLeaguesList] = useState<SelectData[]>([]);
  const [teamsList, setTeamsList] = useState<SelectData[]>([]);

  const { handleSubmit, register, watch, setValue, resetField } = useForm({
    defaultValues: {
      country: '',
      season: '',
      league: '',
      team: '',
    },
  });
  const navigate = useNavigate();

  function handleClearFields(
    values: ('country' | 'team' | 'league' | 'season')[]
  ) {
    values.map((value) => {
      resetField(value);
    });
  }

  const isDisabledSeason = watch('country') === '' || watch('country') === '';
  const isDisabledLeague = watch('country') === '' || watch('season') === '';
  const isDisabledTeam =
    watch('country') === '' || watch('season') === '' || watch('league') === '';

  const onSubmit = (data: FormDataInterface) => {
    console.log(data);
    //navigate('/meu-time');
  };

  function FetchTeams(leagueId: string) {
    api
      .get(`teams/league/${leagueId}`)
      .then((response) => {
        const teams =
          response.data.api.teams &&
          response.data.api.teams.map((data: TeamsData) => {
            return {
              value: data.team_id,
              label: data.name,
            };
          });
        setTeamsList(teams);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function FetchLeagues(countryName: string, season: string) {
    api
      .get(`leagues/country/${countryName}/${season}`)
      .then((response) => {
        const leagues =
          response.data.api.leagues &&
          Object.entries(response.data.api.leagues as LeaguesData).map(
            ([_, value]) => {
              return {
                value: value.league_id,
                label: value.name,
              };
            }
          );
        setLeaguesList(leagues);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function FetchSeasons() {
    api
      .get('seasons')
      .then((response) => {
        const seasons =
          response.data.api.seasons &&
          Object.entries(response.data.api.seasons).map((season) => {
            return { value: season[1], label: season[1] };
          });
        setSeasonsList(seasons);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function FetchCountries() {
    api
      .get('countries')
      .then((response) => {
        const countries =
          response.data.api.countries &&
          Object.entries(response.data.api.countries).map((country) => {
            return { value: country[1], label: country[1] };
          });

        setCountriesList(countries);
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
            {...register('country', { required: true })}
            value={watch('country')}
            placeholder="Selecione um país"
            title="País"
            options={countriesList}
            onChange={(event) => {
              setValue('country', event.target.value);
              handleClearFields(['league', 'season', 'team']);
            }}
          />
          <InputSelect
            {...register('season', { required: true })}
            value={watch('season')}
            title="Temporada"
            disabled={isDisabledSeason}
            placeholder="Selecione uma temporada"
            options={seasonsList}
            onChange={(event) => {
              setValue('season', event.target.value);
              FetchLeagues(watch('country'), event.target.value);
              handleClearFields(['league', 'team']);
            }}
          />
          <InputSelect
            {...register('league', { required: true })}
            value={watch('league')}
            title="Ligas"
            disabled={isDisabledLeague}
            placeholder="Selecione uma liga"
            options={leaguesList}
            onChange={(event) => {
              setValue('league', event.target.value);
              FetchTeams(event.target.value);
              handleClearFields(['team']);
            }}
          />
          <InputSelect
            {...register('team', { required: true })}
            value={watch('team')}
            title="Time"
            disabled={isDisabledTeam}
            placeholder="Selecione um time"
            options={teamsList}
            onChange={(event) => {
              setValue('team', event.target.value);
            }}
          />

          <ButtonContainer>
            <ButtonPrimary title="Continuar" type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
}
