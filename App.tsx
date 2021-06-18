import React from 'react';
// import AppLoading from "expo-app-loading";
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import NavigationService, { navigationRef } from './src/services/NavigationService';

//FONTS
import AppLoading from 'expo-app-loading';
// import * as Font from 'expo-font';

import {
  useFonts,
  Montserrat_900Black,
  Montserrat_700Bold,
  Montserrat_400Regular_Italic,
  Montserrat_400Regular
} from "@expo-google-fonts/montserrat"

//COMPONENTES
import Login from './src/pages/Login';
import ForgotPassword from './src/pages/ForgotPassword';
import Home from './src/pages/Home';
import StrayPet from './src/pages/StrayPet';
import PetLost from './src/pages/PetLost';
import RegisterStrayPet from './src/pages/RegisterStrayPet';
import RegisterPetLost from './src/pages/RegisterPetLost';
import RegisterUser from './src/pages/RegisterUser';

//NAVEGATION
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = (): JSX.Element => {
  const [fontsLoaded] = useFonts({
    Montserrat_900Black,
    Montserrat_700Bold,
    Montserrat_400Regular_Italic,
    Montserrat_400Regular
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => NavigationService.navigate("Home")}>
              <MaterialIcons name="arrow-back" size={25} />
            </TouchableOpacity>
          )
        }}
      >
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
            headerLeft: () => <></>
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Olá Fulano, ",
            headerLeft: () => <></>
          }}
        />
        <Stack.Screen
          name="StrayPet"
          component={StrayPet}
          options={{
            title: "Animais de rua"
          }}
        />
        <Stack.Screen
          name="PetLost"
          component={PetLost}
          options={{
            title: "Animais perdidos"
          }}
        />
        <Stack.Screen
          name="RegisterStrayPet"
          component={RegisterStrayPet}
          options={{
            title: "Cadastrar animal abandonado"
          }}
        />
        <Stack.Screen
          name="RegisterPetLost"
          component={RegisterPetLost}
          options={{
            title: "Cadastrar animal perdido"
          }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{
            title: "Cadastrar usuário"
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: "Esqueceu a Senha"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
