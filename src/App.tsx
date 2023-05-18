import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';
import { Login } from './pages/Login';
import { FormPage } from './pages/FormPage';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <FormPage />
    </ThemeProvider>
  );
}
