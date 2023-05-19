import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { MyTeamContextProvider } from './context/MyTeamContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MyTeamContextProvider>
          <GlobalStyle />
          <Router />
        </MyTeamContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}
