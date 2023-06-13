import React from "react";
import { Character } from "../../AppMain";
import "./_characterList.scss"
import CharacterInfoModal from "../../components/CharacterInfoModal/CharacterInfoModal";

type Props = {
  characters: Character[];
};

const CharacterList = ({ characters }: Props) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [character, setCharacter] = React.useState<Character>();

  console.log(character);
  if (!characters) return null;

  return (
    <div className="characters">
      {characters.map((item) => (
        <div
          key={item.id}
          className="characters__list"
          onClick={() => {
            setIsModalVisible(!isModalVisible);
            setCharacter(item);
          }}
        >
          <img
            alt="rick-and-morty-character"
            className="characters__list--image"
            src={item.image}
          />
          {character && (
            <CharacterInfoModal
              character={character!}
              isModalVisible={isModalVisible}
              setIsModalVisible={setIsModalVisible}
            ></CharacterInfoModal>
          )}
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
