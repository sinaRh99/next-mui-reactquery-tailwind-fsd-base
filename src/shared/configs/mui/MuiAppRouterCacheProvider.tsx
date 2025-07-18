import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';

export const MuiAppRouterCacheProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <AppRouterCacheProvider
      options={{
        stylisPlugins: [prefixer, rtlPlugin],
        key: 'mui-rtl',
      }}
    >
      {children}
    </AppRouterCacheProvider>
  );
};
