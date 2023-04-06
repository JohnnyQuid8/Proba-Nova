import { Button } from "antd";
import React, { useContext, useEffect } from "react";
import { LoginContext } from "../App";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import axios from "axios";

export type Character = {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  created?: string;
  episode?: [];
  gender?: string;
  image?: string;
  location?: { name: string };
  origin?: {};
  url?: string;
}

const CharacterListPage = () => {
  const loginContext = useContext(LoginContext);
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [filteredCharacters, setFilteredCharacters] = React.useState<Character[]>([])

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://rickandmortyapi.com/api/character",
        );
        const data = response.data;
        setCharacters(data.results);
        setFilteredCharacters(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  if (characters.length <= 0) {
    return null;
  } else {
    return (
      <div>
        <header>LOGO</header>
        <SearchBar characters={characters} setFilteredCharacters={setFilteredCharacters} />
        <CharacterList characters={filteredCharacters} />
        <Button onClick={() => loginContext.logout()}>LOG OUT</Button>
      </div>
    );
  }
};

export default CharacterListPage;