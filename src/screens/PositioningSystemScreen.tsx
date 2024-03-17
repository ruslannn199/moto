import { SafeAreaView } from 'react-native';
import React, { type FC } from 'react';
import Button from '../components/Button';

const PositioningSystemScreen: FC = () => {
  return (
    <SafeAreaView className="bg-white flex-1 items-center justify-center gap-8 w-full">
      <Button className="max-w-[250px]">Подключиться к системе «Нониус»</Button>
    </SafeAreaView>
  );
};

export default PositioningSystemScreen;
