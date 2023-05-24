import { Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';

interface getLoginInterface {
    apiKey: string;
    setLoading: Dispatch<SetStateAction>;
    navigate: NavigateFunction;
}
