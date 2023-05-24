import { Dispatch, SetStateAction } from 'react';

interface getLeaguesInterface {
    setLeagueLoading: Dispatch<SetStateAction>;
    setLeaguesList: Dispatch<SetStateAction>;
    countryName: string;
    getHeaders: AxiosHeaderValue<HeadersData>;
}
