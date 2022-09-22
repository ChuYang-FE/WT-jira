import React, { ReactNode, useState } from 'react';

import * as auth from 'authProvider';
import { User } from 'screens/project-list/SearchPanel';
import { http } from 'utils/http';
import { useMount } from 'utils';

interface IContext {
  user: User | null;
  register: (form: AuthForm) => Promise<void>;
  login: (form: AuthForm) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = React.createContext<IContext | undefined>(undefined);

AuthContext.displayName = 'AuthContext'; // for dev-tool

interface AuthForm {
  username: string;
  password: string;
}

const initUser = async () => {
  let user = null;
  const token = auth.getToken();
  if (token) {
    const data = await http('me', { token });
    user = data.user;
  }
  return user;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (form: AuthForm) => auth.login(form).then(setUser);
  const register = (form: AuthForm) => auth.register(form).then(setUser);
  const logout = () => auth.logout().then(() => setUser(null));

  useMount(() => {
    initUser().then(setUser);
  });

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth 须在 AuthProvider 中使用');
  } else {
    return context;
  }
};
