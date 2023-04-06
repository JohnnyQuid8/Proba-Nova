import React from "react";
import "../styles/CharacterList.scss"
import { Character } from "../pages/CharacterListPage";
import CharacterInfoModal from "./CharacterInfoModal";

type Props = {
  characters: Character[],
}

const CharacterList = ({ characters }: Props) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [character, setCharacter] = React.useState<Character>()



  return (
    <div className="container" >
      {characters.map((item) =>
        <button key={item.id}
          onClick={() => {
            setIsModalVisible(!isModalVisible)
            setCharacter(item)
          }}>
          <img alt="rick-and-morty-character"
          className="beforeClick" src={item.image} />
          {character && <CharacterInfoModal 
          character={character!}
          isModalVisible={isModalVisible} 
          setIsModalVisible={setIsModalVisible} 
            >
          </CharacterInfoModal>}
          
        </button>
      )}
    </div>
  )
};

export default CharacterList;
