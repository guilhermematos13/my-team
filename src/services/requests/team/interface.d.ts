import { InfoData } from '../../../context/interface';
import { Dispatch, SetStateAction } from 'react';

interface getTeamInterface {
    info?: InfoData;
    setTeam: Dispatch<SetStateAction>;
    setLoading: Dispatch<SetStateAction>;
    navigate: NavigateFunction;
    getHeaders: AxiosHeaderValue<HeadersData>;
}

interface getTeamByLeagueAndBySeasonInterface {
    leagueId: string;
    seasonId: string;
    setTeamLoading: Dispatch<SetStateAction>;
    setTeamsList: Dispatch<SetStateAction>;
    getHeaders: AxiosHeaderValue<HeadersData>;
}
