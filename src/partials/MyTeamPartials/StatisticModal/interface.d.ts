interface StatisticData {
  played?: number;
  draws?: number;
  wins?: number;
  loses?: number;
}

interface StatisticProps {
  getStatistic?: StatisticData;
}
