import React, {useEffect} from 'react';
import {enableScreens} from 'react-native-screens';
import AppContainer from 'navigation/rootNavigation';

enableScreens();

const App = () => {
  useEffect(() => {}, []);

  return <AppContainer />;
};

export default App;
