import axios from "axios";
import React, { useEffect } from "react";
import "../styles/CharacterList.scss"
// import { ModalContext } from "../pages/CharacterListPage";
import {Modal} from "antd"
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
  location?: {name: string},
  origin: {},
  url: string
  onClick?: ()=>boolean
}



const CharacterList = () => {
  const [characters, setCharacters] = React.useState<Character[]>([]);
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [newState, setNewState] = React.useState<Character>()
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
      <button  key={item.id} 
      onClick={()=>{
        setIsModalVisible(!isModalVisible)
        setNewState(item)}}>
      
        <img className="beforeClick" src={item.image}/>
        <Modal 
          open={isModalVisible}
          onOk={() => {
            setIsModalVisible(false)
          }}
          onCancel={() => {
            console.log(isModalVisible)
            setIsModalVisible(false)}}
            >
              <p>{newState?.name}</p>
              <p>{newState?.gender}</p>
              <p>{newState?.species}</p>
              <p>{newState?.location?.name}</p>
            
              <p>{newState?.name}</p>

              
              </Modal>
        </button>
        
     )
     
     } 
     
  </div>
  )
};

export default CharacterList;
