//import { registerRootComponent } from 'expo';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRouteName: 'Search',   //first interface after opeaning
  defaultNavigationOptions: {
    title: 'Business Search'   //header button
  }
});

export default createAppContainer(navigator);   //inbuilt pakage help to show all element inside navigator