import { Modal, Button } from "antd"
import { Character } from "../pages/CharacterListPage"
import CharacterList from "./CharacterList"
import React from "react"


type Props = {
    children?: React.ReactNode,
    character: Character,
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
    isModalVisible: boolean,
}

type Favorites = {
    character: Character,
    addFavorites: (item: string) => void
}

export const initialFavorites: Favorites = {
    character: {},
    addFavorites: (item: string) => true
}

// export type FavoritesContextType = {
//     favorites: Character[],
//     // : (item: straddFavoritesing) => void
//     // removeFavorites: (item: string) => void

// }



export const FavoritesContext = React.createContext<Character[] | Favorites>(initialFavorites)



const CharacterInfoModal = ({ character, isModalVisible, setIsModalVisible }: Props) => {
    const [favorites, setFavorites] = React.useState<Character[]>([])

    const addToFavorites = () => {
        setFavorites(prev => {
            return [...prev,
                character]
        })
    }
    console.log(favorites)
    
    const value = {
        character: favorites,
        addToFavorites: ()=>true

    }
    return (
        <FavoritesContext.Provider value={favorites}>
            <Modal
                open={isModalVisible}
                onOk={() => {
                    setIsModalVisible(false)
                }}
                onCancel={() => {
                    console.log(isModalVisible)
                    setIsModalVisible(false)
                }}
            >
                <p>{character!.name}</p>
                <p>{character!.gender}</p>
                <p>{character!.species}</p>
                <p>{character!.location?.name}</p>
                <Button onClick={addToFavorites}>FAVORITES</Button>
            </Modal>
        </FavoritesContext.Provider>
    )
}
export default CharacterInfoModal