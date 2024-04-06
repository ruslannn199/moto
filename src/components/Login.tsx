import { Text, TextInput, SafeAreaView, View, StyleSheet } from 'react-native';
import React, { type FC, useState } from 'react';
import { Image } from 'expo-image';
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
    };
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

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/logo.jpg')} alt="Лого" contentFit="cover" style={styles.image} />
      </View>
      <View style={styles.loginForm}>
        <Text style={styles.loginHeading}>Войти в аккаунт</Text>
        <TextInput onChangeText={handleTextChange('username')} placeholder="Логин" style={styles.loginInput} />
        <TextInput
          onChangeText={handleTextChange('password')}
          secureTextEntry
          placeholder="Пароль"
          style={styles.loginInput}
        />
        {formState.error && <Text style={styles.loginError}>{formState.error}</Text>}
        <Button style={styles.loginSubmit} onPress={handlePress}>
          Войти
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 16,
    width: '100%',
  },

  imageContainer: {
    width: 256,
    height: 171,
    overflow: 'hidden',
  },

  image: {
    flex: 1,
    maxWidth: 256,
    width: '100%',
    maxHeight: 171,
    height: '100%',
  },

  loginForm: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    maxWidth: 300,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    gap: 16,
    borderColor: '#e5e7eb',
  },

  loginHeading: {
    fontSize: 24,
    lineHeight: 32,
  },

  loginInput: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    padding: 8,
    fontSize: 16,
    lineHeight: 24,
  },

  loginError: {
    color: 'red',
  },

  loginSubmit: {
    minWidth: 120,
  },
});

export default Login;
