import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import { Character } from "../AppMain";
import React from "react";


type Props = {
  characters: Character[]
}

const CharacterListPage = ({characters}: Props) => {
  const [filteredCharacters, setFilteredCharacters] = React.useState<Character[]>(characters);  
  
  if (characters.length <= 0) {
    return null;
  } else {
    return (
      <div className="character-list">
        <SearchBar characters={characters} setFilteredCharacters={setFilteredCharacters} />
        <CharacterList characters={filteredCharacters} />
      </div>
    );
  }
};

export default CharacterListPage;