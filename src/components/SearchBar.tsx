import { Input, Button } from "antd"
import React from "react";
import axios from "axios";

// created
// : 
// "2017-11-04T18:48:46.250Z"
// episode
// : 
// (51) ['https://rickandmortyapi.com/api/episode/1', 'https://rickandmortyapi.com/api/episode/2', 'https://rickandmortyapi.com/api/episode/3', 'https://rickandmortyapi.com/api/episode/4', 'https://rickandmortyapi.com/api/episode/5', 'https://rickandmortyapi.com/api/episode/6', 'https://rickandmortyapi.com/api/episode/7', 'https://rickandmortyapi.com/api/episode/8', 'https://rickandmortyapi.com/api/episode/9', 'https://rickandmortyapi.com/api/episode/10', 'https://rickandmortyapi.com/api/episode/11', 'https://rickandmortyapi.com/api/episode/12', 'https://rickandmortyapi.com/api/episode/13', 'https://rickandmortyapi.com/api/episode/14', 'https://rickandmortyapi.com/api/episode/15', 'https://rickandmortyapi.com/api/episode/16', 'https://rickandmortyapi.com/api/episode/17', 'https://rickandmortyapi.com/api/episode/18', 'https://rickandmortyapi.com/api/episode/19', 'https://rickandmortyapi.com/api/episode/20', 'https://rickandmortyapi.com/api/episode/21', 'https://rickandmortyapi.com/api/episode/22', 'https://rickandmortyapi.com/api/episode/23', 'https://rickandmortyapi.com/api/episode/24', 'https://rickandmortyapi.com/api/episode/25', 'https://rickandmortyapi.com/api/episode/26', 'https://rickandmortyapi.com/api/episode/27', 'https://rickandmortyapi.com/api/episode/28', 'https://rickandmortyapi.com/api/episode/29', 'https://rickandmortyapi.com/api/episode/30', 'https://rickandmortyapi.com/api/episode/31', 'https://rickandmortyapi.com/api/episode/32', 'https://rickandmortyapi.com/api/episode/33', 'https://rickandmortyapi.com/api/episode/34', 'https://rickandmortyapi.com/api/episode/35', 'https://rickandmortyapi.com/api/episode/36', 'https://rickandmortyapi.com/api/episode/37', 'https://rickandmortyapi.com/api/episode/38', 'https://rickandmortyapi.com/api/episode/39', 'https://rickandmortyapi.com/api/episode/40', 'https://rickandmortyapi.com/api/episode/41', 'https://rickandmortyapi.com/api/episode/42', 'https://rickandmortyapi.com/api/episode/43', 'https://rickandmortyapi.com/api/episode/44', 'https://rickandmortyapi.com/api/episode/45', 'https://rickandmortyapi.com/api/episode/46', 'https://rickandmortyapi.com/api/episode/47', 'https://rickandmortyapi.com/api/episode/48', 'https://rickandmortyapi.com/api/episode/49', 'https://rickandmortyapi.com/api/episode/50', 'https://rickandmortyapi.com/api/episode/51']
// gender
// : 
// "Male"
// id
// : 
// 1
// image
// : 
// "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
// location
// : 
// {name: 'Citadel of Ricks', url: 'https://rickandmortyapi.com/api/location/3'}
// name
// : 
// "Rick Sanchez"
// origin
// : 
// {name: 'Earth (C-137)', url: 'https://rickandmortyapi.com/api/location/1'}
// species
// : 
// "Human"
// status
// : 
// "Alive"
// type
// : 
// ""
// url
// : 
// "https://rickandmortyapi.com/api/character/1"

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

interface Filters {
  name?: string,
  species?: string,
  status?: string,
  gender?: string,

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
    return item[category] === searchTerm
  })

  // const filteredItems = items.filter((item) => {
  //     const makeFilterWork = filterState;
  //     const filterWork = `${makeFilterWork} + `
  //     return console.log(item.makeFilterWork)
  // })
  console.log(category)
  console.log(filteredItems)
  console.log(items)
  
  return (
    <div>
      <Input
        value={searchTerm}
        placeholder="Search"
        onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}>
      </Input>
      <Button onClick={() => {
        setCategory("name")
      }}>NAME</Button>
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