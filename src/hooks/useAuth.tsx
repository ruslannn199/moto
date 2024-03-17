import { type FC, createContext, type PropsWithChildren, useState, useContext } from 'react';
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
  const [user, setUser] = useState<string | null>(null);
  const { setItem, removeItem } = useLocalStorage();

  const login = async (user: string) => {
    await setItem('user', user);
    setUser(user);
  };

  const logout = async () => {
    await removeItem('user');
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
