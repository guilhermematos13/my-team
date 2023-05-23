import { Dispatch, SetStateAction } from 'react';

interface getLoginInterface {
  apiKey: string;
  setLoading: Dispatch<SetStateAction>;
  navigate: NavigateFunction;
}
