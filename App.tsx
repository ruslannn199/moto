import './styles.css';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider, SettingsProvider } from './src/hooks';
import Navigation from './src/components/Navigation';
import type { FC } from 'react';

const App: FC = () => {
  return (
    <AuthProvider>
      <SettingsProvider>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </SettingsProvider>
    </AuthProvider>
  );
};

export default App;
