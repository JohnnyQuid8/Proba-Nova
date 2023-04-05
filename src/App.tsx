import * as React from "react";
import AppMain from "./AppMain";
import { useNavigate } from "react-router-dom";

export interface LoginContext {
  isLogedIn: boolean;
  login: () => void;
  logout: () => void;
}

// We dont want to type it as nullable, to avoid unescessery checks.
// @ts-ignore
export const LoginContext = React.createContext<LoginContext>(undefined);

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
