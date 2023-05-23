import axios from 'axios';
import { AES, enc } from 'crypto-js';

const apiKey = localStorage.getItem('token');

export const api = axios.create({
  baseURL: 'https://api-football-v1.p.rapidapi.com',
  headers: {
    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
    'x-rapidapi-key':
      apiKey && AES.decrypt(apiKey, 'SecretApiKey').toString(enc.Utf8),
  },
});
