import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharacterListPage from "./pages/CharacterListPage";
import { LoginContext } from "./App";
import Favorites from "./pages/Favorites";
import { FavoritesContext } from "./components/CharacterInfoModal";
const AppMain = () => {
  const loginContext = React.useContext(LoginContext);
  const favoritescontext = React.useContext(FavoritesContext)
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
      {FavoritesContext && <Route path="favorites" element={<Favorites/>}></Route>}
    </Routes>
  );
};
export default AppMain;

