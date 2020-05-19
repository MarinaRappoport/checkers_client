import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        "fontFamily": "\"Heebo\", sans-serif"
    },
    direction: 'rtl',
    palette: {
        primary: {
            main: '#6fc1e9',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        dark: '#868686'
    },
});

export default theme;
