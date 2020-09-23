//import { registerRootComponent } from 'expo';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  ResultsShow: ResultsShowScreen
}, {
  initialRouteName: 'Search',   //first interface after opeaning
  defaultNavigationOptions: {
    title: 'Business Search'   //header button
  }
});

export default createAppContainer(navigator);   //inbuilt pakage help to show all element inside navigator