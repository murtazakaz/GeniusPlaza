import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import People from 'screens/PeopleScreen/People';

const AppStack = createStackNavigator(
  {
    People: People,
  },
  {
    // mode: 'modal',
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
