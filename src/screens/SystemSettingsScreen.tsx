import { Text, SafeAreaView } from 'react-native';
import React, { type FC } from 'react';

const SystemSettingsScreen: FC = () => {
  return (
    <SafeAreaView className="bg-white flex-1 justify-center items-center gap-8 w-full">
      <Text className="text-2xl font-bold">Настройка системы</Text>
      <Text>Настройка №1</Text>
      <Text>Настройка №2</Text>
      <Text>Настройка №3</Text>
    </SafeAreaView>
  );
};

export default SystemSettingsScreen;
