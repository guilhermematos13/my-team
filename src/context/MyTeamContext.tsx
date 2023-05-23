import { createContext, useState } from 'react';
import { InfoData, MyTeamContextType, MyTeamProviderProps } from './interface';

export const MyTeamContext = createContext({} as MyTeamContextType);

export function MyTeamContextProvider({ children }: MyTeamProviderProps) {
    const [info, setInfo] = useState<InfoData>();

    return <MyTeamContext.Provider value={{ setInfo, info }}>{children}</MyTeamContext.Provider>;
}
