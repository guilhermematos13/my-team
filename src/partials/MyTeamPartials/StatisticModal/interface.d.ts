interface StatisticData {
  played?: number;
  draws?: number;
  wins?: number;
  loses?: number;
}
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
