import React, { type FC } from 'react';
import Login from '../components/Login';
import { StyleSheet, View } from 'react-native';
import { PropsWithNavigation } from '../types';

const LoginScreen: FC<PropsWithNavigation> = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 16,
    paddingBottom: 16,
  },
});

export default LoginScreen;
