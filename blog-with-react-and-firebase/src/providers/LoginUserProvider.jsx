import { createContext, useState } from "react";

export const LoginUserContext = createContext({});

export const LoginUserProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <LoginUserContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </LoginUserContext.Provider>
  );
};
