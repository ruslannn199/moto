import { Text, SafeAreaView } from 'react-native';
import React, { type FC } from 'react';

const LaunchHistoryScreen: FC = () => {
  return (
    <SafeAreaView className="bg-white flex flex-1 items-center justify-center gap-8 w-full">
      <Text className="text-2xl text-bold">История запусков системы</Text>
      <Text>Недавние запуски отсутствуют</Text>
    </SafeAreaView>
  );
};

export default LaunchHistoryScreen;
