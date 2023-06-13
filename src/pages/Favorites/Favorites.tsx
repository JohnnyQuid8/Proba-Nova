import React from "react";
import { FavoritesContext } from "../../AppMain";
import { Button } from "antd";
import EditCharacter from "../../components/EditCharacter/EditCharacter";
import { Character } from "../../AppMain";

type Props = {
  characters: Character[];
};

const Favorites = ({ characters }: Props) => {
  const favoritescontext = React.useContext(FavoritesContext);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [characterId, setCharacterId] = React.useState<number | null>(null);



  return (
    <div>
      {characters.map((character) => {
        const found = favoritescontext.favoriteIds.indexOf(character.id) !== -1;
        if (found) {
          return (
            <ul key={`${character} + ${character.id}`}>
              <img key={character.id} src={character.image} alt="character"/>
              <li>{character.name}</li>
              <li>{character.gender}</li>
              <li>{character.species}</li>
              <li>{character.location?.name}</li>
              <Button
                onClick={() => favoritescontext.removeFavorite(character.id)}
              >
                REMOVE
              </Button>
              <Button
                key={`${character} + ${character.status}`}
                onClick={(e) => {
                  setIsModalVisible((prev) => !prev);
                  console.log(isModalVisible);
                  setCharacterId(character.id);
                }}
              >
                EDIT
              </Button>
            </ul>
          );
        } else {
          return null;
        }
      })}
      {characterId && (
        <EditCharacter
          character={
            characters.find((character) => characterId === character.id)!
          }
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        ></EditCharacter>
      )}
    </div>
  );
};

export default Favorites;
