import { ReactNode, createContext } from 'react';

interface MyTeamContextType {
  Context: () => void;
}

interface MyTeamProviderProps {
  children: ReactNode;
}

export const MyTeamContext = createContext({} as MyTeamContextType);

export function MyTeamContextProvider({ children }: MyTeamProviderProps) {
  const Context = () => {
    return;
  };

  return (
    <MyTeamContext.Provider value={{ Context }}>
      {children}
    </MyTeamContext.Provider>
  );
}
