import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';


export type AppParamsList = {
  Home: undefined;
  StrayPet: undefined;
}

export type AppStackNavProps<T extends keyof AppParamsList> = {
  navigation: StackNavigationProp<AppParamsList, T>;
  route: RouteProp<AppParamsList, T>;
};