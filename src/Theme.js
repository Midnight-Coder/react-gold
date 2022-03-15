import {
  blueGrey, lime, orange, red, teal
} from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';


const htmlFontSize = 18;
const fontSize = 16;

const Theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: lime[500]
    },
    error: {
      light: orange[500],
      main: red[300]
    }
  },
  typography: {
    htmlFontSize,
    fontSize,
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 400,
    h1: {
      fontSize: '3rem'
    },
    h2: {
      borderBottom: `1px solid ${blueGrey[200]}`,
      fontSize: '1.5rem',
      marginBottom: '1rem'
    },
    h3: {
      borderBottom: `1px dotted ${blueGrey[200]}`,
      fontSize: '1rem',
      fontWeight: 'bold',
      paddingBottom: '5px',
      textTransform: 'uppercase'
    },
    h4: {
      fontSize: '1rem'
    },
    h5: {
      fontSize: '1rem',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      borderBottom: `1px dotted ${blueGrey[200]}`
    },
    h6: {
      fontSize: '0.63rem'
    },
    subtitle1: {
      color: blueGrey[200],
      fontSize: '1rem'
    },
    subtitle2: {
      fontSize: '0.7rem'
    },
    caption: {
      fontSize: '0.7rem'
    },
    button: {
      borderRadius: '3px',
      padding: '6px 12px',
      textTransform: 'uppercase'
    }
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: 'white',
        '&:hover': { backgroundColor: teal[700] }
      },
      textSecondary: {
        fontWeight: 'bold',
        '&:hover': { color: teal[700] }
      },
      outlinedSecondary: {
        '&:hover': { color: teal[700] }
      }
    }
  }
});

export default Theme;
