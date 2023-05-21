import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { MyTeamContextProvider } from './context/MyTeamContext';
import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MyTeamContextProvider>
          <Toaster />
          <GlobalStyle />
          <Router />
        </MyTeamContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
