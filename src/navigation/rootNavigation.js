import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import People from 'screens/PeopleScreen/People';
import Planet from 'screens/PlanetScreen/Planet';

const AppStack = createStackNavigator(
  {
    People: People,
    Planet: Planet,
  },

  {
    // mode: 'modal',
    // headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
