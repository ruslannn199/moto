import { Text, SafeAreaView, StyleSheet } from 'react-native';
import React, { type FC } from 'react';

const LaunchHistoryScreen: FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>История запусков системы</Text>
      <Text>Недавние запуски отсутствуют</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 32,
    width: '100%',
  },

  heading: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
});

export default LaunchHistoryScreen;
