import './styles.css';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/hooks';
import Navigation from './src/components/Navigation';
import Header from './src/components/Header';
import type { FC } from 'react';

const App: FC = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Header />
        <Navigation />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
