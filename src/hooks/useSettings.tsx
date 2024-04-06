import { createContext, type FC, useContext, useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

type Settings = {
  startingSpeed: number | null;
  maxAvailableSpeed: number | null;
  workingTime: number | null;
};

type SettingsContextType = {
  settings: Settings;
  setSettings: React.Dispatch<React.SetStateAction<Settings>>;
  saveSettings: () => Promise<void>;
};

const SettingsContext = createContext<SettingsContextType | null>(null);

interface SettingsProviderProps {
  children?: React.ReactNode;
}

const SettingsProvider: FC<SettingsProviderProps> = ({ children }) => {
  const { setItem, getItem } = useLocalStorage();
  const [settings, setSettings] = useState<Settings>({
    startingSpeed: 0,
    maxAvailableSpeed: 0,
    workingTime: 0,
  });

  const saveSettings = async () => {
    await setItem('settings', JSON.stringify(settings));
  };

  useEffect(() => {
    getItem('settings').then((settings) => {
      if (settings) {
        setSettings(JSON.parse(settings));
      }
    });
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, setSettings, saveSettings }}>{children}</SettingsContext.Provider>
  );
};

export default SettingsProvider;

export const useSettingsContext = () => useContext(SettingsContext);
