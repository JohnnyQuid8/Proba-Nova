import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharacterListPage from "./pages/CharacterListPage";
import { LoginContext } from "./App";
import Favorites from "./pages/Favorites";
const AppMain = () => {
  const loginContext = React.useContext(LoginContext);

  return (
    <Routes>
      {!loginContext.isLogedIn && (
        <Route path="*" element={<LoginPage />}></Route>
      )}
      {loginContext.isLogedIn && (
        <Route
          path="/character-list-page"
          element={<CharacterListPage />}
        ></Route>
      )}
      <Route path="favorites" element={<Favorites/>}></Route>
    </Routes>
  );
};
export default AppMain;

