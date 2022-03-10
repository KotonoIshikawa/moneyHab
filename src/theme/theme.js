import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
          main: '#3d5afe',
          contrastText: '#ffffff',
        },
        secondary: {
            main: '#ef5350',
            contrastText: '#ffffff',
          },
        background: {
          default: '#eceff1',
        },
        text: { primary: '#212121' },
      },
});

export default theme;