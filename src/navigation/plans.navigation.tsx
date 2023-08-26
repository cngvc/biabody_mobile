import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  PRICING_SCREEN,
  QUESTIONS_SCREEN,
  SUCCESS_SCREEN,
} from '@constants/screens';

import Pricing from '@features/plans/pricing.screen';
import Questions from '@features/plans/questions.screen';
import Success from '@features/plans/success.screen';

export type RootStackParamList = {
  [PRICING_SCREEN]: undefined;
  [QUESTIONS_SCREEN]: undefined;
  [SUCCESS_SCREEN]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const PlansStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={PRICING_SCREEN}>
      <Stack.Screen name={PRICING_SCREEN} component={Pricing} />
      <Stack.Screen name={QUESTIONS_SCREEN} component={Questions} />
      <Stack.Screen name={SUCCESS_SCREEN} component={Success} />
    </Stack.Navigator>
  );
};

export default PlansStack;
