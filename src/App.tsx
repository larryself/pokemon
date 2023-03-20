import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from 'router/appRouter';
import { useThemeSelector } from 'store/hooks/useThemeSelector';
import { ThemeProvider } from 'styled-components';
import { DarkTheme } from 'styles/darkTheme';
import { LightTheme } from 'styles/lightTheme';
import { GlobalStyles } from 'styles/style';

export const App = () => {
  const {theme} = useThemeSelector();
  const currentTheme = theme === 'LightTheme' ? LightTheme : DarkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyles/>
        <AppRouter/>
      </ThemeProvider>
    </BrowserRouter>
  );
};
