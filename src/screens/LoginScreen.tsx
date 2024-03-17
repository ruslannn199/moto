import React, { type FC } from 'react'
import Login from '../components/Login';
import { View } from 'react-native';
import { PropsWithNavigation } from '../types';

const LoginScreen: FC<PropsWithNavigation> = ({ navigation }) => {
  return (
    <View className="flex-1 items-center bg-white py-4" >
      <Login />
    </View>
  );
}

export default LoginScreen;