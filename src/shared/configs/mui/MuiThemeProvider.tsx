import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

export const MuiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
