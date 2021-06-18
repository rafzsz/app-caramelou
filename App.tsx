import React from 'react';
import { View, SafeAreaView } from 'react-native';

//FONTS
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

//COMPONENTES
import Login from './src/components/Login/Login';
import ForgotPassword from './src/components/ForgotPassword/ForgotPassword';
import Home from './src/components/Home/Home';
import Footer from './src/components/Footer/Footer';
import StrayPet from './src/components/StrayPet/StrayPet';
import PetLost from './src/components/PetLost/PetLost';
import RegisterPetLost from './src/components/RegisterPetLost/RegisterPetLost';
import RegisterStrayPet from './src/components/RegisterStrayPet/RegisterStrayPet';
import RegisterUser from './src/components/RegisterUser/RegisterUser';

//NAVEGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './src/screens/RootStackPrams';
import MainScreen from './src/screens/main';
import AuthScreen from './src/screens/auth';

const Stack = createStackNavigator();

// let customFonts = {
//   'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
// };

const App = (): JSX.Element => {
  //   state = {
  //     fontsLoaded: false,
  //   };

  //   async _loadFontsAsync() {
  //     await Font.loadAsync(customFonts);
  //     this.setState({ fontsLoaded: true });
  //   }

  //   componentDidMount() {
  //     this._loadFontsAsync();
  //   }
  //   if (this.state.fontsLoaded) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen name="StrayPet" component={StrayPet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
// else {
//   return <AppLoading />;
// }
// }

export default App;
