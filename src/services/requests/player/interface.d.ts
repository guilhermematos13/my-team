import { Dispatch, SetStateAction } from 'react';
import { InfoData } from '../../../context/interface';

interface getPlayersInterface {
    setPlayersList: Dispatch<SetStateAction>;
    info?: InfoData;
}
