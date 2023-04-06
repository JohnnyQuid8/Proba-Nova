import { FavoritesContext } from "../components/CharacterInfoModal"
import React from "react"
const Favorites = () => {
    const favoritescontext = React.useContext(FavoritesContext)
    console.log(favoritescontext)
    return (
        <div>
            {favoritescontext?.map(item=>{
                return <li>{item.image}</li>
            })}
        </div>
    )
}
export default Favorites;