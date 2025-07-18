import { MuiAppRouterCacheProvider } from './MuiAppRouterCacheProvider';
import { MuiThemeProvider } from './MuiThemeProvider';

export const MuiRtlThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <MuiAppRouterCacheProvider>
      <MuiThemeProvider>{children}</MuiThemeProvider>
    </MuiAppRouterCacheProvider>
  );
};
