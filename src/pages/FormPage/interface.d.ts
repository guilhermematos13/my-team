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

type LeaguesData = {
  [key: string]: {
    league_id: string;
    name: string;
  };
};

interface TeamsData {
  team_id: string;
  name: string;
}

interface SelectData {
  value: string;
  label: string;
}
