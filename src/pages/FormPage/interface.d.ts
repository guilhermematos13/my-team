interface FormDataInterface {
  country: string;
  season: string;
  league: string;
  team: string;
}

interface CountriesData {
  name: string;
  code: string;
}

interface TeamsDataResponse {
  team: {
    id: string;
    name: string;
  };
}

interface LeagueDataResponse {
  league: {
    id: string;
    name: string;
  };
}

interface SelectData {
  value: string;
  label: string;
}
