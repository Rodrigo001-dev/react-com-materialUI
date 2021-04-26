import { createMuiTheme } from "@material-ui/core";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = {
  type: 'dark',
  primary: {
    main: '#7159C1',
    contrastText: '#242526'
  },
  background: {
    default: '#191622',
  },
};

// vai criar a instância do tema 
const theme = createMuiTheme({
  palette,
});

export default theme;