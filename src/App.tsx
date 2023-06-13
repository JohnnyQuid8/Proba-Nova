import * as React from "react";
import AppMain from "./AppMain";
import { useNavigate } from "react-router-dom";

export interface LoginContextType{
  isLogedIn: boolean,
  login: () => void,
  logout: () => void,
}

const initalLogin: LoginContextType = {
  isLogedIn: false,
  login: () => {},
  logout: () => {},
} 
export const LoginContext = React.createContext<LoginContextType>(initalLogin);

export function App() {
  const navigate = useNavigate();
  const [isLogedIn, setIsLogedIn] = React.useState(false);

  const value = {
    isLogedIn: isLogedIn,
    login: () => {
      setIsLogedIn(true);
      navigate("/character-list-page");
    },
    logout: () => {
      setIsLogedIn(false);
      navigate("/");
    },
  };

  return (
    <LoginContext.Provider value={value}>
      <AppMain />
    </LoginContext.Provider>
  );
}
