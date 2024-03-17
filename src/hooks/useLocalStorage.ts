import AsyncStorage from '@react-native-async-storage/async-storage';

export const useLocalStorage = () => {
  const setItem = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (err) {
      console.error(err);
    }
  };

  const getItem = async (key: string): Promise<string | null> => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  const removeItem = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (err) {
      console.error(err);
    }
  };

  return { setItem, getItem, removeItem };
};
