import { Dispatch, SetStateAction } from 'react';
import { InfoData } from '../../../context/interface';

interface getLineUpStatisticsInterface {
  info?: InfoData;
  setGetStatistic: Dispatch<SetStateAction>;
  setGoalsList: Dispatch<SetStateAction>;
  setLineUpList: Dispatch<SetStateAction>;
}

type GoalsDataResponse = {
  [key: string]: {
    title: string;
    percentage: string;
    total: string;
  };
};

interface StatisticDataResponse {
  played: {
    total: number;
  };
  draws: {
    total: number;
  };
  wins: {
    total: number;
  };
  loses: {
    total: number;
  };
}
