import { createTheme } from "@mui/material";
const themeMain = createTheme({
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
          default: '#3d5afe',
        },
        text: { primary: '#212121' },
        primaryGradation: {
            toRight: 'linear-gradient(90deg, #FF0000, #FFBA00)',
            toBottom: 'linear-gradient(180deg, #FF0000, #FFBA00)',
            toRightBottom: 'linear-gradient(135deg, #FF0000, #FFBA00)',
          },
    },
    /*background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'*/
    
});

export default themeMain;