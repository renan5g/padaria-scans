import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import { GlobalStyles } from './styles/global';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <h1>Padaria Scans</h1>
    </ThemeProvider>
  );
};
