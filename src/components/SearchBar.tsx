import { Input, Button } from "antd"
import React from "react";
import { Character } from "../pages/CharacterListPage";

type Props = {
  characters: Character[]
  setFilteredCharacters: React.Dispatch<React.SetStateAction<Character[]>>
}

const SearchBar = ({ characters, setFilteredCharacters }: Props) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [category, setCategory] = React.useState<keyof Character>("name");
 
  return (
    <div>
      <Input
        value={searchTerm}
        placeholder="Search"
        onChange={(event) => {
          setSearchTerm(event.target.value.toLowerCase())
          setFilteredCharacters(characters.filter((item) => {
            switch(category) {
              case "name":
              case "gender":
              case "species":
              case "status": {
                
                return item[category].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
              }
              default: return false
            }
          }))
        }}>
      </Input>
      <Button onClick={() => setCategory("name")}>NAME</Button>
      <Button onClick={() => setCategory("species")}>SPECIES</Button>
      <Button onClick={() => setCategory("status")}>STATUS</Button>
      <Button onClick={() => setCategory("gender")}>GENDER</Button>
    </div>
  )
}
export default SearchBar;