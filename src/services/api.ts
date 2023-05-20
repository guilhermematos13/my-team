import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key': '001e6aecafmsh7ed999dcc40c8e4p17ad3cjsnb5e0b7862474',
  },
});
