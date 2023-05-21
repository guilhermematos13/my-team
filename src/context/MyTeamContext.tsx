import { ReactNode, createContext, useState } from 'react';

interface MyTeamContextType {
  info: InfoData | undefined;
  setInfo: React.Dispatch<React.SetStateAction<InfoData | undefined>>;
}

interface MyTeamProviderProps {
  children: ReactNode;
}

interface InfoData {
  country: string;
  season: string;
  league: string;
  team: string;
}

export const MyTeamContext = createContext({} as MyTeamContextType);

export function MyTeamContextProvider({ children }: MyTeamProviderProps) {
  const [info, setInfo] = useState<InfoData>();

  return (
    <MyTeamContext.Provider value={{ setInfo, info }}>
      {children}
    </MyTeamContext.Provider>
  );
}
