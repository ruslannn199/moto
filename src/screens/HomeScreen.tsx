import { SafeAreaView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center gap-8 p-16">
      <h1 className="text-5xl tracking-wide">РосМорПорт</h1>
      <h2 className="uppercase text-2xl tracking-wide">СЗ-503</h2>
    </SafeAreaView>
  );
};

export default HomeScreen;
