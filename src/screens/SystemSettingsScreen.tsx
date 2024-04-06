import { Text, SafeAreaView, StyleSheet, View, StyleProp, ViewStyle } from 'react-native';
import React, { useState, type FC } from 'react';
import { useSettingsContext } from '../hooks';
import Slider from '@react-native-community/slider';
import Button from '../components/Button';

const startingSetting = 0;
const endingStartingSpeed = 500;
const endingMaxAvailableSpeed = 500;
const endingWorkingTime = 180;

const SystemSettingsScreen: FC = () => {
  const { settings, setSettings, saveSettings } = useSettingsContext();
  const [saveButtonStyle, setSaveButtonStyle] = useState<StyleProp<ViewStyle>>(styles.button);
  const [resetButtonStyle, setResetButtonStyle] = useState<StyleProp<ViewStyle>>(styles.button);

  const handleSaveButtonClick = async () => {
    setSaveButtonStyle({ ...styles.button, ...styles.buttonClickAnimation });
    setTimeout(() => {
      setSaveButtonStyle(styles.button);
    }, 150);
    await saveSettings();
  };

  const handleResetButtonClick = () => {
    setResetButtonStyle({ ...styles.button, ...styles.buttonClickAnimation });
    setTimeout(() => {
      setResetButtonStyle(styles.button);
    }, 150);
    setSettings({ ...settings, startingSpeed: 0, maxAvailableSpeed: 0, workingTime: 0 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Настройка системы</Text>
      <View style={styles.slidersContainer}>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Начальная скорость, В</Text>
          <View style={styles.numbersContainer}>
            <Text style={styles.sliderValue}>{startingSetting}</Text>
            <Text style={styles.sliderValue}>{settings.startingSpeed}</Text>
            <Text style={styles.sliderValue}>{endingStartingSpeed}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={startingSetting}
            maximumValue={endingStartingSpeed}
            step={1}
            value={settings.startingSpeed}
            onValueChange={(value) => setSettings({ ...settings, startingSpeed: value })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Максимальная допустимая скорость, В</Text>
          <View style={styles.numbersContainer}>
            <Text style={styles.sliderValue}>{startingSetting}</Text>
            <Text style={styles.sliderValue}>{settings.maxAvailableSpeed}</Text>
            <Text style={styles.sliderValue}>{endingMaxAvailableSpeed}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={startingSetting}
            maximumValue={endingMaxAvailableSpeed}
            step={1}
            value={settings.maxAvailableSpeed}
            onValueChange={(value) => setSettings({ ...settings, maxAvailableSpeed: value })}
          />
        </View>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderLabel}>Время работы, мин</Text>
          <View style={styles.numbersContainer}>
            <Text style={styles.sliderValue}>{startingSetting}</Text>
            <Text style={styles.sliderValue}>{settings.workingTime}</Text>
            <Text style={styles.sliderValue}>{endingWorkingTime}</Text>
          </View>
          <Slider
            style={styles.slider}
            minimumValue={startingSetting}
            maximumValue={endingWorkingTime}
            step={1}
            value={settings.workingTime}
            onValueChange={(value) => setSettings({ ...settings, workingTime: value })}
          />
        </View>
        <Button style={saveButtonStyle} onPress={handleSaveButtonClick}>
          Сохранить
        </Button>
        <Button style={resetButtonStyle} type="danger" onPress={handleResetButtonClick}>
          Сбросить
        </Button>
      </View>
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

  slidersContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sliderLabel: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },

  sliderValue: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
    color: 'black',
    width: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    textAlign: 'center',
    margin: 8,
  },

  numbersContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 16,
  },

  slider: {
    width: 200,
    height: 40,
  },

  button: {
    maxWidth: 250,
    marginTop: 16,
  },

  buttonClickAnimation: {
    transform: [{ scale: 0.9 }],
  },
});

export default SystemSettingsScreen;
