import { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomPalette {
    day: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    day: true;
  }
}
