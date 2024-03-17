import { View, Text, TextInput } from 'react-native';
import React, { type FC, useState } from 'react';
import Button from './Button';
import { useAuth } from '../hooks';

const Login: FC = () => {
  const { login } = useAuth();
  const [formState, setFormState] = useState({
    username: '',
    password: '',
    error: null,
  });

  const handleTextChange = (field: string) => {
    return (textChange: string) => {
      setFormState({
        ...formState,
        [field]: textChange,
      });
    }
  };

  const handlePress = async () => {
    if (formState.username === '' || formState.password === '') {
      setFormState({
        ...formState,
        error: 'Заполните все поля',
      });
    } else if (formState.username === 'admin' && formState.password === 'admin') {
      setFormState({
        ...formState,
        error: null,
      });
      await login(formState.username);
    } else {
      setFormState({
        ...formState,
        error: 'Неверный логин или пароль',
      });
    }
  };

  const inputClassNames = 'border border-gray-200 rounded-md p-2 w-full text-lg';

  return (
    <View className="border border-gray-200 rounded-md p-4 m-4 gap-4 max-w-[300px]">
      <Text className="text-2xl font-bold">Войти в аккаунт</Text>
      <TextInput
        onChangeText={handleTextChange('username')}
        placeholder="Логин"
        className={inputClassNames}
      />
      <TextInput
        onChangeText={handleTextChange('password')}
        secureTextEntry
        placeholder="Пароль"
        className={inputClassNames}
      />
      {formState.error && (
        <Text className="text-red-500">{formState.error}</Text>
      )}
      <Button onPress={handlePress}>Войти</Button>
    </View>
  );
};

export default Login;
