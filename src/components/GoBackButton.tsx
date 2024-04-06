import React, { type FC } from 'react';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../types';
import { StyleSheet } from 'react-native';

const GoBackButton: FC = () => {
  const navigation = useNavigation<Navigation>();

  const handlePress = () => {
    navigation.goBack();
  };

  return (
    <Button style={styles.button} onPress={handlePress}>
      Назад
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    maxWidth: 250,
  },
});

export default GoBackButton;
