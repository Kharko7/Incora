import { createContext, useState } from 'react';

type AuthorizationContextProviderProps = {
  children: React.ReactNode
};
type AuthorizationContextProps = {
  auth: number
  setAuth: React.Dispatch<React.SetStateAction<number>>
}
export const AuthorizationContext = createContext<AuthorizationContextProps>({ auth: 0, setAuth(): void { } });

export const AuthorizationContextProvider = ({ children }: AuthorizationContextProviderProps) => {
  const [auth, setAuth] = useState<number>(Number(localStorage.getItem('isAuth')));

  return (
    <AuthorizationContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthorizationContext.Provider>
  )
};
