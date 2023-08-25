import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {PRICING_SCREEN} from '@constants/screens';
import Pricing from '@features/plans/pricing.screen';

export type RootStackParamList = {
  [PRICING_SCREEN]: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const PlansStack: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={PRICING_SCREEN}
        options={{headerShown: false}}
        component={Pricing}
      />
    </Stack.Navigator>
  );
};

export default PlansStack;
