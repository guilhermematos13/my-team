import { toast } from 'react-hot-toast';
import axios from 'axios';
import { AES } from 'crypto-js';
import { getLoginInterface } from './interface';

export const fetchLogin = ({ apiKey, setLoading, navigate, setToken }: getLoginInterface) => {
    setLoading(true);
    axios
        .get('https://api-football-v1.p.rapidapi.com/countries', {
            headers: {
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                'x-rapidapi-key': apiKey,
            },
        })
        .then(response => {
            if (response.data) {
                const token = AES.encrypt(apiKey, 'SecretApiKey').toString();
                localStorage.setItem('token', token);
                setToken(token);
                return new Promise(resolve => {
                    const interval = setInterval(() => {
                        const item = localStorage.getItem('token');
                        if (item && token) {
                            clearInterval(interval);
                            resolve(item);
                            toast.success('Bem vindo ao meu time!');
                            navigate('/selecao-time');
                        }
                    }, 100);
                });
            }
        })
        .catch(() => {
            toast.error('Verifique sua API Key e tente novamente');
        })
        .finally(() => {
            setLoading(false);
        });
};
