import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  cssVariables: true,
  direction: 'rtl',
  typography: {
    fontFamily: 'var(--font-vazir)', // you should use the variable name that you defined for your custom next-font
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
        sx: {},
      },
      styleOverrides: {},
      variants: [
        {
          props: {
            variant: 'outlined',
            color: 'secondary',
          },
          style: {
            border: '10px solid #fc9403 !important',
          },
        },
      ],
    },
  },
});
