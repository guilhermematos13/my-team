import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { getCountriesInterface } from './interface';

export const fetchCountries = ({
  setCountryLoading,
  setCountriesList,
}: getCountriesInterface) => {
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
};
