import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const greenTheme = createTheme({
    palette: {
        primary: {
            main: '#70c459'
        },
        secondary: {
            main: '#3f902a'
        },
        error: {
            main: red.A400
        }
    }
})
