import { Modal, Button } from "antd"
import { Character } from "../pages/CharacterListPage"
import React from "react"
import { FavoritesContext } from "../AppMain"


type Props = {
    children?: React.ReactNode,
    character: Character,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isModalVisible: boolean,
}



const CharacterInfoModal = ({ character, isModalVisible, setIsModalVisible }: Props) => {
    const favoritesContext = React.useContext(FavoritesContext)
    return (
        <Modal
            open={isModalVisible}
            onOk={() => {
                setIsModalVisible(false)
            }}
            onCancel={() => {
                setIsModalVisible(false)
            }}
        >
            <div><img src={character.image} /></div>
            <p>{character!.name}</p>
            <p>{character!.gender}</p>
            <p>{character!.species}</p>
            <p>{character!.location?.name}</p>
            <Button onClick={() => favoritesContext.addFavorite(character)
            }>FAVORITES</Button>
        </Modal>
    )
}
export default CharacterInfoModal