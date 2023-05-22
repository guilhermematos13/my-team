import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { ButtonContainer, Container, FormContainer, Title } from './styles';
import { useForm } from 'react-hook-form';
import { InputSelect } from '../../components/InputSelect';
import { useContext, useEffect, useState } from 'react';
import { api } from '../../services/api';
import { toast } from 'react-hot-toast';
import { ErrorMessage } from '../../components/ErrorMessage';
import { MyTeamContext } from '../../context/MyTeamContext';

export function FormPage() {
  const { setInfo } = useContext(MyTeamContext);
  const [countriesList, setCountriesList] = useState<SelectData[]>([]);
  const [seasonsList, setSeasonsList] = useState<SelectData[]>([]);
  const [leaguesList, setLeaguesList] = useState<SelectData[]>([]);
  const [teamsList, setTeamsList] = useState<SelectData[]>([]);
  const [countryLoading, setCountryLoading] = useState(false);
  const [seasonLoading, setSeasonLoading] = useState(false);
  const [leagueLoading, setLeagueLoading] = useState(false);
  const [teamLoading, setTeamLoading] = useState(false);

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    resetField,
    formState: { errors },
  } = useForm({
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
    setInfo(data);
    navigate('/meu-time');
  };

  function FetchTeams(leagueId: string, seasonId: string) {
    setTeamLoading(true);
    api
      .get(`v3/teams`, {
        params: {
          league: leagueId,
          season: seasonId,
        },
      })
      .then((response) => {
        const teams =
          response.data.response &&
          response.data.response.map((data: TeamsDataResponse) => {
            return {
              value: data.team.id,
              label: data.team.name,
            };
          });
        setTeamsList(teams);
      })
      .catch(() => {
        toast.error('Algo deu errado ao buscar os times');
      })
      .finally(() => {
        setTeamLoading(false);
      });
  }

  function FetchLeagues(countryName: string) {
    setLeagueLoading(true);
    api
      .get(`v3/leagues`, {
        params: {
          country: countryName,
        },
      })
      .then((response) => {
        const leagues =
          response.data.response &&
          response.data.response.map((value: LeagueDataResponse) => {
            return {
              value: value.league.id,
              label: value.league.name,
            };
          });
        setLeaguesList(leagues);
      })
      .catch(() => {
        toast.error('Algo deu errado ao buscar as ligas');
      })
      .finally(() => {
        setLeagueLoading(false);
      });
  }

  function FetchSeasons() {
    setSeasonLoading(true);
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
      .catch(() => {
        toast.error('Algo deu errado ao buscar as temporadas');
      })
      .finally(() => {
        setSeasonLoading(false);
      });
  }

  function FetchCountries() {
    setCountryLoading(true);
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
      .catch(() => {
        toast.error('Algo deu errado ao buscar os países');
      })
      .finally(() => {
        setCountryLoading(false);
      });
  }

  useEffect(() => {
    FetchCountries();
    FetchSeasons();
  }, []);

  return (
    <div>
      <Header teamTitle="Escolha seu time" />
      <Container>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <Title>Selecione as opções abaixo:</Title>
          <InputSelect
            {...register('country', { required: 'Campo obrigatório' })}
            value={watch('country')}
            placeholder="Selecione um país"
            loading={countryLoading}
            title="País"
            options={countriesList}
            onChange={(event) => {
              setValue('country', event.target.value);
              handleClearFields(['league', 'season', 'team']);
            }}
          />
          {errors.country && watch('country') === '' && (
            <ErrorMessage>{errors.country.message}</ErrorMessage>
          )}
          <InputSelect
            {...register('season', { required: 'Campo obrigatório' })}
            value={watch('season')}
            title="Temporada"
            loading={seasonLoading}
            disabled={isDisabledSeason}
            placeholder="Selecione uma temporada"
            options={seasonsList}
            onChange={(event) => {
              setValue('season', event.target.value);
              FetchLeagues(watch('country'));
              handleClearFields(['league', 'team']);
            }}
          />
          {errors.season && watch('season') === '' && (
            <ErrorMessage>{errors.season.message}</ErrorMessage>
          )}
          <InputSelect
            {...register('league', { required: 'Campo obrigatório' })}
            value={watch('league')}
            title="Ligas"
            loading={leagueLoading}
            disabled={isDisabledLeague}
            placeholder="Selecione uma liga"
            options={leaguesList}
            onChange={(event) => {
              setValue('league', event.target.value);
              FetchTeams(event.target.value, watch('season'));
              handleClearFields(['team']);
            }}
          />
          {errors.league && watch('league') === '' && (
            <ErrorMessage>{errors.league.message}</ErrorMessage>
          )}
          <InputSelect
            {...register('team', { required: 'Campo obrigatório' })}
            value={watch('team')}
            title="Time"
            loading={teamLoading}
            disabled={isDisabledTeam}
            placeholder="Selecione um time"
            options={teamsList}
            onChange={(event) => {
              setValue('team', event.target.value);
            }}
          />
          {errors.team && watch('team') === '' && (
            <ErrorMessage>{errors.team.message}</ErrorMessage>
          )}

          <ButtonContainer>
            <ButtonPrimary title="Continuar" type="submit" />
          </ButtonContainer>
        </FormContainer>
      </Container>
    </div>
  );
}
