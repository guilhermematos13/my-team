import { Dispatch, SetStateAction } from 'react';
import { HeadersData } from '../../../context/interface';

interface getCountriesInterface {
    setCountryLoading: Dispatch<SetStateAction>;
    setCountriesList: Dispatch<SetStateAction>;
    getHeaders: AxiosHeaderValue<HeadersData>;
}
