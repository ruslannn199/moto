import { NavigationProp } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  StartSystem: undefined;
  LaunchHistory: undefined;
  SystemSettings: undefined;
  PositioningSystem: undefined;
}

export type Navigation = NavigationProp<RootStackParamList>;

export type PropsWithNavigation = {
  navigation: Navigation;
};
