
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CharacterListPage from "./pages/CharacterListPage";
import { LoginContext } from "./App";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import axios from "axios";

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

export const FavoritesContext = React.createContext<FavoritesContext>(
  initialFavorites
);

const AppMain = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character"
        );
        const data = response.data;
        setCharacters(data.results);
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
      setFavoriteIds(favoriteIds.filter((item) => item !== characterId));
    },
    updateCharacter: (character) => {
      setCharacters([
        ...characters.filter((item) => item.id !== character.id),
        character,
      ]);
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
          <Route path="/favorites" element={<Favorites characters={characters} />} />
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
