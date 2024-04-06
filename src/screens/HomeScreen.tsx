import { StyleSheet, Text, View } from 'react-native';
import React, { type FC } from 'react';
import type { PropsWithNavigation, RootStackParamList } from '../types';
import Button from '../components/Button';
import { Image } from 'expo-image';

const HomeScreen: FC<PropsWithNavigation> = ({ navigation }) => {
  const navigateTo = (direction: keyof RootStackParamList) => {
    return () => navigation.navigate(direction);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>СЗ-503</Text>
      <Image style={styles.image} source={require('../../assets/ship.jpg')} />
      <Button type="danger" style={styles.button} onPress={navigateTo('StartSystem')}>
        Пуск системы
      </Button>
      <Button type="secondary" style={styles.button} onPress={navigateTo('SystemSettings')}>
        Настройка системы
      </Button>
      <Button style={styles.button} onPress={navigateTo('LaunchHistory')}>
        История запусков
      </Button>
      <Button style={styles.button} onPress={navigateTo('PositioningSystem')}>
        Система позиционирования
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: 'white',
    gap: 32,
  },

  button: {
    maxWidth: 250,
  },

  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },

  image: {
    flex: 1,
    maxHeight: 171,
    maxWidth: 256,
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 8,
  },
});

export default HomeScreen;
