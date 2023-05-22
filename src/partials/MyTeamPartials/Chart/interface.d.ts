interface GoalsData {
  x: string;
  label: string;
  y: number;
}

type GoalsDataResponse = {
  [key: string]: {
    title: string;
    percentage: string;
    total: string;
  };
};
