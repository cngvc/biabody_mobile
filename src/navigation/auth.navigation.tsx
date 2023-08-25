import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {INTRO_SCREEN, LOGIN_SCREEN, SIGN_UP_SCREEN} from '@constants/screens';
import Login from '@features/authentication/login.screen';
import Intro from '@features/authentication/intro.screen';
import SignUp from '@features/authentication/sign-up.screen';

export type RootStackParamList = {
  [LOGIN_SCREEN]: undefined;
  [INTRO_SCREEN]: undefined;
  [SIGN_UP_SCREEN]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={INTRO_SCREEN}
        options={{headerShown: false}}
        component={Intro}
      />
      <Stack.Screen name={LOGIN_SCREEN} component={Login} />

      <Stack.Screen
        name={SIGN_UP_SCREEN}
        options={{headerShown: false}}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
