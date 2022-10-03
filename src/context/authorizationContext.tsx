import { createContext, useState } from 'react';

type AuthorizationContextProviderProps = {
  children: React.ReactNode
};
type AuthorizationContextProps = {
  auth: number
  setAuth: React.Dispatch<React.SetStateAction<number>>
}

export const AuthorizationContext = createContext<AuthorizationContextProps | null>(null);

export const AuthorizationContextProvider = ({ children }: AuthorizationContextProviderProps) => {
  const [auth, setAuth] = useState<number>(0);

  return (
    <AuthorizationContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthorizationContext.Provider>
  )
};
