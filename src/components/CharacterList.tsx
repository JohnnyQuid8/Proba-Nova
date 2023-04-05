import axios from "axios";
import React, { useEffect } from "react";
import "../styles/CharacterList.scss"
import { ModalContext } from "../pages/CharacterListPage";
interface Character {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  created: string,
  episode: [],
  gender: string,
  image: string,
  location: {},
  origin: {},
  url: string
  onClick?: ()=>boolean
}



const CharacterList = () => {
  const [characters, setCharacters] = React.useState<Character[]>([])
  const modalContext = React.useContext(ModalContext);
  useEffect(() =>{
    async function fetchData() {
      try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        const data = response.data
        setCharacters(data.results)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  console.log(characters)
  return (
  <div className="container" >
       {characters.map((item)=>
      <button onClick={()=>modalContext.openModal()} key={item.id}>
        <img className="beforeClick" src={item.image}/>
        </button>
     )}   
  </div>
  )
};

export default CharacterList;
