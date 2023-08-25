import 'react-native-gesture-handler';

import React from 'react';
import Providers from '@providers';
import {SafeArea} from '@components/layouts/SafeArea';
import AppNavigator from '@navigation';

const App: React.FC = () => {
  return (
    <Providers>
      <SafeArea>
        <AppNavigator />
      </SafeArea>
    </Providers>
  );
};

export default App;
