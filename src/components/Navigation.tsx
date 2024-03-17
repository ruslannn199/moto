import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import React, { type FC } from 'react'
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { useAuth } from '../hooks';

const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'РосМорПорт' }} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Вход' }} />
      )}
    </Stack.Navigator>
  )
}

export default Navigation;
const Stack = createNativeStackNavigator<RootStackParamList>();


