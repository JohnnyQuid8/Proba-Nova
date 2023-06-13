import { Modal, Button } from "antd";
import { Character } from "../../AppMain";
import React from "react";
import { FavoritesContext } from "../../AppMain";

import style from './CharacterInfoModal.module.scss';

type Props = {
  children?: React.ReactNode;
  character?: Character;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isModalVisible: boolean;
};

const CharacterInfoModal = ({
  character,
  isModalVisible,
  setIsModalVisible,
}: Props) => {
  const favoritesContext = React.useContext(FavoritesContext);

  if(!character) return null

  return (
    <Modal
      open={isModalVisible}
      onOk={() => {
        setIsModalVisible(false);
      }}
      onCancel={() => {
        setIsModalVisible(false);
      }}
    >
      <div>
        <img src={character.image} />
      </div>
      <p className={style.container}>{character!.name}</p>
      <p className={`${style.aleksa} ${style.bigText}`}>{character!.gender}</p>
      <p>{character!.species}</p>
      <p>{character!.location?.name}</p>
      <Button onClick={() => favoritesContext.addFavorite(character.id)}>
        FAVORITES
      </Button>
    </Modal>
  );
};
export default CharacterInfoModal;
