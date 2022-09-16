import { createTheme } from "@mui/material/styles";
const PRIMARY_COLOR = '#aaff00';
const SECONDARY_COLOR = '#1e001e';

export default createTheme({
    palette: {
        mode: 'dark',
        primary: {
          // Purple and green play nicely together.
          main: PRIMARY_COLOR,
          contrastText: '#ffffff',
        },
        secondary: {
          // This is green.A700 as hex.
          main: SECONDARY_COLOR,
          contrastText: '#ffffff',
        },
        tertiary: {
          main: '#FF69B4',
          contrastText: '#ffffff',
        },
        error: {
          main: '#d32f2f',
        },
        success: {
          main: '#2e7d32',
        },
        text: {
          primary: '#ffffff',
          secondary: '#ffffff',
        },
        background: {
          paper: '#520052',
        },
      },
      typography: {
        // In Chinese and Japanese the characters are usually larger,
        // so a smaller fontsize may be appropriate.
        fontSize: 16,
        fontFamily: [
          'DM Sans',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
})