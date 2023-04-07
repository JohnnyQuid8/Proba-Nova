import React from "react"
import { FavoritesContext } from "../AppMain"
import {Button} from "antd"
import EditCharacter from "../components/EditCharacter"
import { Character } from "../pages/CharacterListPage"

const Favorites = ({}) => {
    const favoritescontext = React.useContext(FavoritesContext)
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [character, setCharacter] = React.useState<Character>()
    return (
        <div>
            {favoritescontext.favorites.map(item=>{
                return <ul key={`${item} + ${item.id}`}> 
                        <img key={item.id} src={item.image}/>
                         <li>{item.name}</li>
                        <li>{item.gender}</li>
                         <li>{item.species}</li>
                        <li>{item.location?.name}</li>
                        <Button onClick={()=>favoritescontext.removeFavorite(item)}>REMOVE</Button>
                        <Button key={`${item} + ${item.status}`}
                            onClick={()=>{
                            setIsModalVisible(prev=>!prev)
                            console.log(isModalVisible)
                            setCharacter(item)
                        }}>
                        {character && <EditCharacter 
                        character={character!}
                        isModalVisible={isModalVisible} 
                        setIsModalVisible={setIsModalVisible} 
            >
          </EditCharacter>}
          EDIT</Button>
                        </ul>

            })}
        </div>
    )
}
export default Favorites;