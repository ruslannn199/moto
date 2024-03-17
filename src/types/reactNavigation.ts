import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Menu: undefined;
}

export type Navigation = NavigationProp<RootStackParamList>;

export type PropsWithNavigation = {
  navigation: Navigation;
};
