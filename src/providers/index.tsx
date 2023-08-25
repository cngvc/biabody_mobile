import React from 'react';
import {combine} from '@providers/combine';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {theme} from '@themes/light.theme';

const Providers: React.FC<{children: React.ReactNode}> = ({children}) =>
  combine([SafeArea, Theme], children);

const Theme = (props: {children?: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

const SafeArea = (props: {children?: React.ReactNode}) => (
  <SafeAreaProvider>{props.children}</SafeAreaProvider>
);
export default Providers;
