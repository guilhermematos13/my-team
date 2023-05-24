import { ReactNode, SetStateAction } from 'react';

interface MyTeamContextType {
    info: InfoData | undefined;
    setInfo: React.Dispatch<SetStateAction<InfoData | undefined>>;
    token: string | undefined;
    setToken: React.Dispatch<SetStateAction<string | undefined>>;
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
