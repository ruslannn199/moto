import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import React, { type FC } from 'react';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import { useAuth } from '../hooks';
import StartSystemScreen from '../screens/StartSystemScreen';
import SystemSettingsScreen from '../screens/SystemSettingsScreen';
import LaunchHistoryScreen from '../screens/LaunchHistoryScreen';
import PositioningSystemScreen from '../screens/PositioningSystemScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Главная' }} />
          <Stack.Screen name="StartSystem" component={StartSystemScreen} options={{ title: 'Пуск системы' }} />
          <Stack.Screen
            name="SystemSettings"
            component={SystemSettingsScreen}
            options={{ title: 'Настройки системы' }}
          />
          <Stack.Screen
            name="LaunchHistory"
            component={LaunchHistoryScreen}
            options={{ title: 'История запусков системы' }}
          />
          <Stack.Screen
            name="PositioningSystem"
            component={PositioningSystemScreen}
            options={{ title: 'Система позиционирования' }}
          />
        </>
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Вход' }} />
      )}
    </Stack.Navigator>
  );
};

export default Navigation;
