import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import { LoginContext } from "./App";
import Favorites from "./pages/Favorites/Favorites";
import Header from "./components/Header/Header";
import { characterListRepo } from "./modules/charactersList/charactersList.repo";
import { characterListService } from "./modules/charactersList/charactersList.service";

export interface FavoritesContext {
  favoriteIds: number[];
  addFavorite: (characterId: number) => void;
  removeFavorite: (characterId: number) => void;
  updateCharacter: (character: Character) => void;
}

const initialFavorites: FavoritesContext = {
  favoriteIds: [],
  addFavorite: () => {},
  removeFavorite: () => {},
  updateCharacter: () => {},
};

export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  created: string;
  episode: [];
  gender: string;
  image: string;
  location: { name: string };
  origin: {};
  url: string;
};

export const FavoritesContext =
  React.createContext<FavoritesContext>(initialFavorites);

const AppMain = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await characterListService.fetchAllCharacters();
        setCharacters(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const loginContext = React.useContext(LoginContext);
  const [favoriteIds, setFavoriteIds] = React.useState<number[]>(() => {
    const storedIds = localStorage.getItem("favoriteIds");
    return storedIds ? JSON.parse(storedIds) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("favoriteIds", JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const value: FavoritesContext = {
    favoriteIds: favoriteIds,
    addFavorite: (characterId) => {
      setFavoriteIds((prev) => {
        return [...prev, characterId];
      });
    },
    removeFavorite: (characterId) => {
      setFavoriteIds(characterListService.setFavoriteIds(favoriteIds, characterId));
    },
    updateCharacter: (singleCharacter) => {
      setCharacters(
        characterListService.setUpdatedCharacter(characters, singleCharacter)
      );
    },
  };

  const renderRoutes = () => {
    if (loginContext.isLogedIn) {
      return (
        <>
          <Route
            path="/character-list-page"
            element={<CharacterListPage characters={characters} />}
          />
          <Route
            path="/favorites"
            element={<Favorites characters={characters} />}
          />
        </>
      );
    } else {
      return <Route path="*" element={<LoginPage />} />;
    }
  };

  return (
    <FavoritesContext.Provider value={value}>
      {loginContext.isLogedIn && <Header />}
      <Routes>{renderRoutes()}</Routes>
    </FavoritesContext.Provider>
  );
};

export default AppMain;
