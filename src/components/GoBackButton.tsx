import React, { type FC } from 'react';
import Button from './Button';
import { useNavigation } from '@react-navigation/native';
import { Navigation } from '../types';

const GoBackButton: FC = () => {
  const navigation = useNavigation<Navigation>();

  const handlePress = () => {
    navigation.goBack();
  };

  return <Button className="max-w-[250px]" onPress={handlePress}>Назад</Button>;
};

export default GoBackButton;
