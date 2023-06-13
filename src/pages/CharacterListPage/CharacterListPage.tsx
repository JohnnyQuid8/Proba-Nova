import CharacterList from "../../components/CharacterList/CharacterList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Character } from "../../AppMain";
import React from "react";

type Props = {
  characters: Character[];
};

const CharacterListPage = ({ characters }: Props) => {
  const [filteredCharacters, setFilteredCharacters] =
    React.useState<Character[]>(characters);

  if (characters && characters.length <= 0) {
    return null;
  }
  return (
    <div className="character-list">
      <SearchBar
        characters={characters}
        setFilteredCharacters={setFilteredCharacters}
      />
      <CharacterList characters={filteredCharacters} />
    </div>
  );
};

export default CharacterListPage;
