import { Dispatch, SetStateAction } from 'react';

interface getCountriesInterface {
    setCountryLoading: Dispatch<SetStateAction>;
    setCountriesList: Dispatch<SetStateAction>;
}
