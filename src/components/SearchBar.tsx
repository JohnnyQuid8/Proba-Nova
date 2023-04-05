import { Input, Button } from "antd"
import React from "react";
import axios from "axios";

interface Items {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  created: string,
  episode: [],
  gender: string,
  image: string,
  location?: { name: string },
  origin: {},
  url: string,
  onClick?: () => boolean,
  filterState: string,
  makeFilterWork: string,
}

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");
  const [items, setItems] = React.useState<Items[]>([])
  const [category, setCategory] = React.useState<keyof Items>("name");

  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const data = response.data
        setItems(data.results);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const filteredItems = items.filter((item) => {
    switch(category) {
      case "name":
      case "gender":
      case "species":
      case "status": {
        return item[category].toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
      }
      // TODO Uradi ostalo sta moze da se search
      default: return false
    }
  })
 
  return (
    <div>
      <Input
        value={searchTerm}
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}>
      </Input>
      <Button onClick={() => setCategory("name")}>NAME</Button>
      <Button onClick={() => setCategory("species")}>SPECIES</Button>
      <Button onClick={() => setCategory("status")}>STATUS</Button>
      <Button onClick={() => setCategory("gender")}>GENDER</Button>
      {filteredItems.map((item) => {
        return <li>{item.name}</li>
      })}
    </div>
  )
}
export default SearchBar;