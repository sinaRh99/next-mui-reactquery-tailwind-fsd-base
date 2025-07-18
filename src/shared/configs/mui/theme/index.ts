import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--font-vazir)', // you should use the variable name that you defined for your custom next-font
  },
});
