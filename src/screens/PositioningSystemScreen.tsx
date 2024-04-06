import { ActivityIndicator, SafeAreaView, StyleProp, StyleSheet, Text, ViewStyle } from 'react-native';
import React, { useState, type FC } from 'react';
import Button from '../components/Button';
import { PropsWithNavigation } from '../types';

type ButtonState = {
  styles: StyleProp<ViewStyle>;
  text: React.ReactNode;
};

const PositioningSystemScreen: FC<PropsWithNavigation> = () => {
  const [buttonState, setButtonState] = useState<ButtonState>({
    styles: {
      ...styles.button,
    },
    text: 'Подключиться к системе «Нониус»',
  });
  const handlePress = () => {
    setButtonState({
      styles: {
        ...styles.button,
        ...styles.buttonLoading,
      },
      text: <ActivityIndicator size="small" color="white" />,
    });

    setTimeout(() => {
      setButtonState({
        styles: {
          ...styles.button,
        },
        text: 'Подключение завершено!',
      });
    }, 3000);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button style={buttonState.styles} onPress={handlePress}>
        {buttonState.text}
      </Button>
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

  button: {
    maxWidth: 250,
  },

  buttonLoading: {
    opacity: 0.8,
  },

  buttonLoadingText: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'center',
    color: 'white',
  },
});

export default PositioningSystemScreen;
