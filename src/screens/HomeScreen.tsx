import { View } from 'react-native';
import React, { type FC } from 'react';
import type { PropsWithNavigation, RootStackParamList } from '../types';
import Button from '../components/Button';

const ButtonClassNames = 'max-w-[250px]';

const HomeScreen: FC<PropsWithNavigation> = ({ navigation }) => {
  const navigateTo = (direction: keyof RootStackParamList) => {
    return () => navigation.navigate(direction);
  }
  return (
    <View className="flex-1 items-center justify-center bg-white gap-8">
      <Button type="danger" className={ButtonClassNames} onPress={navigateTo('StartSystem')}>Пуск системы</Button>
      <Button type="secondary" className={ButtonClassNames} onPress={navigateTo('SystemSettings')}>Настройка системы</Button>
      <Button className={ButtonClassNames} onPress={navigateTo('LaunchHistory')}>История запусков</Button>
      <Button className={ButtonClassNames} onPress={navigateTo('PositioningSystem')}>Система позиционирования</Button>
    </View>
  );
};

export default HomeScreen;
