import { type FC, createContext, type PropsWithChildren, useState, useContext, useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

type AuthContextType = {
  user: string | null;
  login: (user: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { setItem, removeItem, getItem } = useLocalStorage();
  const [user, setUser] = useState<string | null>(null);

  const login = async (user: string) => {
    await setItem('user', user);
    setUser(user);
  };

  const logout = async () => {
    await removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    getItem('user').then((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
