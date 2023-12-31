import {DefaultTheme} from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      transparent: string;
      primary_first: string;
      primary_second: string;
      white: string;
      raisin_black: string;
      metallic_gray: string;
      bright_gray: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    fontFamily: {
      mi300: string;
      mi400: string;
      mi500: string;

      mo300: string;
      mo400: string;
      mo500: string;
      mo600: string;
      mo700: string;
    };
    sizes: object;
    space: object;
    fontSizes: object;
  }
}

const theme: DefaultTheme = {
  colors: {
    transparent: 'transparent',
    primary_first: '#ED1653',
    primary_second: '#F15822',
    white: '#FFFFFF',
    raisin_black: '#1D1B1C',
    metallic_gray: '#8B8889',
    bright_gray: '#EFEFEF',
  },
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  fontFamily: {
    mi300: 'Mitr-Light',
    mi400: 'Mitr-Regular',
    mi500: 'Mitr-Medium',

    mo300: 'Montserrat-Light',
    mo400: 'Montserrat-Regular',
    mo500: 'Montserrat-Medium',
    mo600: 'Montserrat-SemiBold',
    mo700: 'Montserrat-Bold',
  },
  fontSizes: {
    '0': 0,
    '8': 8,
    '12': 12,
    '14': 14,
    '16': 16,
    '24': 24,
    '32': 32,
  },
  sizes: {
    '0': 0,
    '8': 8,
    '16': 16,
    '24': 24,
    '32': 32,
    '40': 40,
    '48': 48,
    '56': 56,
    '64': 64,
  },
  space: {
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '8': 8,
    '10': 10,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '28': 28,
    '32': 32,
    '36': 36,
    '40': 40,
    '48': 48,
    '52': 52,
    '56': 56,
  },
};

export {theme};
