import { createContext, useState } from 'react';
import { InfoData, MyTeamContextType, MyTeamProviderProps } from './interface';
import { AES, enc } from 'crypto-js';

export const MyTeamContext = createContext({} as MyTeamContextType);

export function MyTeamContextProvider({ children }: MyTeamProviderProps) {
    const [info, setInfo] = useState<InfoData>();
    const [token, setToken] = useState<string>();
    const tokenStorage = localStorage.getItem('token');

    const getHeaders = {
        'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
        'x-rapidapi-key':
            (tokenStorage || token) &&
            AES.decrypt(tokenStorage || (token as string), 'SecretApiKey').toString(enc.Utf8),
    };

    return (
        <MyTeamContext.Provider value={{ setInfo, info, token, setToken, getHeaders }}>
            {children}
        </MyTeamContext.Provider>
    );
}
