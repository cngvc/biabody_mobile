import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './auth.navigation';
import {useTheme} from 'styled-components/native';
import {
  AUTH_STACK,
  INTRO_SCREEN,
  LOGIN_SCREEN,
  PLAN_STACK,
  PRICING_SCREEN,
  SIGN_UP_SCREEN,
} from '@constants/screens';
import PlansStack from './plans.navigation';

export type RootStackParamList = {
  [AUTH_STACK]: undefined;
  [LOGIN_SCREEN]: undefined;
  [INTRO_SCREEN]: undefined;
  [SIGN_UP_SCREEN]: undefined;

  [PLAN_STACK]: undefined;
  [PRICING_SCREEN]: undefined;
};

const Stack = createStackNavigator();

const AppNavigator: React.FC = () => {
  const {colors} = useTheme();

  const theme: any = {
    colors: {
      background: colors.white,
    },
  };

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName={AUTH_STACK}
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen
          name={AUTH_STACK}
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={PLAN_STACK}
          component={PlansStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
