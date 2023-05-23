import { toast } from 'react-hot-toast';
import { api } from '../../api';
import { getSeasonsInterface } from './interface';

export const fetchSeasons = ({
  setSeasonLoading,
  setSeasonsList,
}: getSeasonsInterface) => {
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
};
