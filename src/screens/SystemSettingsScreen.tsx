import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { type FC } from 'react';

const SystemSettingsScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Настройка системы</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    gap: 32,
    width: '100%',
  },

  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});

export default SystemSettingsScreen;
