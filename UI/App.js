
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login';
import Open1 from './components/Open1';
import Open2 from './components/Open2';
import Open3 from './components/Open3';
import SignUp from './components/SignUp';
import ChartsScreen from './components/ChartsScreen';
import App1 from './App1';
//import all the screens we are going to switch
const App = createStackNavigator({
  //Constant which holds all the screens like index of any book
    Login: { screen: Login },
    //First entry by default be our first screen if we do not define initialRouteName
    Open1: { screen: Open1 },
    Open2: { screen: Open2 },
    Open3: { screen: Open3 },
    SignUp: { screen: SignUp },
    ChartsScreen: { screen: ChartsScreen },
    App1: {screen: App1},
  },
);
export default createAppContainer(App);
