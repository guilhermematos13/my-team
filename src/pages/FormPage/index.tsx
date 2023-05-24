import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from '../../components/ButtonPrimary';
import { Header } from '../../components/Header';
import { ButtonContainer, Container, FormContainer, Title } from './styles';
import { useForm } from 'react-hook-form';
import { InputSelect } from '../../components/InputSelect';
import { useContext, useEffect, useState } from 'react';
import { ErrorMessage } from '../../components/ErrorMessage';
import { MyTeamContext } from '../../context/MyTeamContext';
import { fetchTeamsByLeagueAndBySeason, fetchCountries, fetchSeasons, fetchLeagues } from '../../services';

export function FormPage() {
    const { setInfo, getHeaders } = useContext(MyTeamContext);
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

    function handleClearFields(values: ('country' | 'team' | 'league' | 'season')[]) {
        values.map(value => {
            resetField(value);
        });
    }

    const isDisabledSeason = watch('country') === '' || watch('country') === '';
    const isDisabledLeague = watch('country') === '' || watch('season') === '';
    const isDisabledTeam = watch('country') === '' || watch('season') === '' || watch('league') === '';

    const onSubmit = (data: FormDataInterface) => {
        setInfo(data);
        navigate('/meu-time');
    };

    useEffect(() => {
        fetchCountries({ setCountriesList, setCountryLoading, getHeaders });
        fetchSeasons({ setSeasonLoading, setSeasonsList, getHeaders });
    }, [getHeaders]);

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
                        onChange={event => {
                            setValue('country', event.target.value);
                            handleClearFields(['league', 'season', 'team']);
                        }}
                    />
                    {errors.country && watch('country') === '' && <ErrorMessage>{errors.country.message}</ErrorMessage>}
                    <InputSelect
                        {...register('season', { required: 'Campo obrigatório' })}
                        value={watch('season')}
                        title="Temporada"
                        loading={seasonLoading}
                        disabled={isDisabledSeason}
                        placeholder="Selecione uma temporada"
                        options={seasonsList}
                        onChange={event => {
                            setValue('season', event.target.value);
                            fetchLeagues({
                                countryName: watch('country'),
                                setLeagueLoading,
                                setLeaguesList,
                                getHeaders,
                            });
                            handleClearFields(['league', 'team']);
                        }}
                    />
                    {errors.season && watch('season') === '' && <ErrorMessage>{errors.season.message}</ErrorMessage>}
                    <InputSelect
                        {...register('league', { required: 'Campo obrigatório' })}
                        value={watch('league')}
                        title="Ligas"
                        loading={leagueLoading}
                        disabled={isDisabledLeague}
                        placeholder="Selecione uma liga"
                        options={leaguesList}
                        onChange={event => {
                            setValue('league', event.target.value);
                            fetchTeamsByLeagueAndBySeason({
                                leagueId: event.target.value,
                                seasonId: watch('season'),
                                setTeamLoading,
                                setTeamsList,
                                getHeaders,
                            });
                            handleClearFields(['team']);
                        }}
                    />
                    {errors.league && watch('league') === '' && <ErrorMessage>{errors.league.message}</ErrorMessage>}
                    <InputSelect
                        {...register('team', { required: 'Campo obrigatório' })}
                        value={watch('team')}
                        title="Time"
                        loading={teamLoading}
                        disabled={isDisabledTeam}
                        placeholder="Selecione um time"
                        options={teamsList}
                        onChange={event => {
                            setValue('team', event.target.value);
                        }}
                    />
                    {errors.team && watch('team') === '' && <ErrorMessage>{errors.team.message}</ErrorMessage>}

                    <ButtonContainer>
                        <ButtonPrimary title="Continuar" type="submit" />
                    </ButtonContainer>
                </FormContainer>
            </Container>
        </div>
    );
}
