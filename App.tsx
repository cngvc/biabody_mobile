import React from 'react';
import Providers from '@providers';
import AppNavigator from '@navigation';

const App: React.FC = () => {
  return (
    <Providers>
      <AppNavigator />
    </Providers>
  );
};

export default App;
