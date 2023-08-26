import React from 'react';
import {combine} from '@providers/combine';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider} from 'styled-components';
import {theme} from '@themes/light.theme';
import {Provider} from 'react-redux';
import {store} from '@store';
import {I18nextProvider} from 'react-i18next';
import i18n from '@i18n';

const Providers: React.FC<{children: React.ReactNode}> = ({children}) =>
  combine([SafeArea, Theme, Redux, I18n], children);

const I18n = (props: {children?: React.ReactNode}) => (
  <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>
);
const Redux = (props: {children?: React.ReactNode}) => (
  <Provider store={store}>{props.children}</Provider>
);
const Theme = (props: {children?: React.ReactNode}) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);
const SafeArea = (props: {children?: React.ReactNode}) => (
  <SafeAreaProvider>{props.children}</SafeAreaProvider>
);
export default Providers;
