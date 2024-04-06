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
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation: FC = () => {
  const { user, logout } = useAuth();
  const handleExitButtonClick = async () => {
    await logout();
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#fff' },
        headerRight: () => {
          if (user) {
            return <Ionicons onPress={handleExitButtonClick} name="exit" size={24} color="#000" style={styles.exit} />;
          }
          return null;
        },
      }}
    >
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

const styles = StyleSheet.create({
  exit: {
    marginRight: 10,
  },
});

export default Navigation;
