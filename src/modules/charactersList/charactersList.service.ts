import { Character } from "../../AppMain";
import { characterListRepo } from "./charactersList.repo"



class CharacterListService {
    fetchAllCharacters = async () => {
        try {

            const charListResponse = await characterListRepo.fetchAllCharacters();
            console.log(charListResponse)
            return charListResponse.data.results;
        } catch(e) {
            return []
        }
    }

    setUpdatedCharacter = (characters: Character[], character: Character) => {
        return [
            ...characters.filter((item) => item.id !== character.id),
            character,
          ]
    }

    setFavoriteIds= (characters: Character[], character: Character) => {
        return [
            ...characters.filter((item) => item.id !== character.id),
            character,
          ]
    }

    // move to favorites module
 
}

export const characterListService = new CharacterListService()