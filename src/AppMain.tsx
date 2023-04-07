import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharacterListPage from "./pages/CharacterListPage";
import { LoginContext } from "./App";
import Favorites from "./pages/Favorites";
import { Character } from "./pages/CharacterListPage";
import Header from "./components/Header";
import { useNavigate } from "react-router-dom";

export interface FavoritesContext {
  favorites: Character[],
  addFavorite: (character: Character) => void
  removeFavorite: (character: Character) => void
  favoritesLog: boolean,
  login: () => void,
  logout: () => void,
}

const initialFavorites: FavoritesContext = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  favoritesLog: false,
  login: () => {},
  logout: () => {},
}

export const FavoritesContext = React.createContext<FavoritesContext>(initialFavorites)

const AppMain = () => {
  const navigate = useNavigate();

  const loginContext = React.useContext(LoginContext);
  const favoritesContext = React.useContext(FavoritesContext);

  const [favorites, setFavorites] = React.useState<Character[]>([])
  const [favoritesLog, setFavoritesLog] = React.useState<boolean>(false)

  const value: FavoritesContext = {
    favorites: favorites,
    addFavorite: (character: Character)=>{
      setFavorites(prev=>{
        return [
          ...prev,
          character
        ]
      })
    },
    removeFavorite: (character: Character) => {

      setFavorites(favorites.filter(item=>item !==character))
    },
    favoritesLog: favoritesLog,
    login: () => {
      setFavoritesLog(true);
      navigate("/favorites");
    },
    logout: () => {
      setFavoritesLog(false);
      navigate("/character-list-page");
    },

}




  return (
    <FavoritesContext.Provider value={value}>
      {loginContext.isLogedIn && <Header/>}

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
    {!favoritesContext.favoritesLog &&
     (<Route path="/favorites" element={<Favorites/>}></Route>)}
    {favoritesContext.favoritesLog && (<Route path="/character-list-page" element={<CharacterListPage/>}></Route>)}


    </Routes>

    </FavoritesContext.Provider>
    
  );
};
export default AppMain;

