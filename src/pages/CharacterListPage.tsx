import React from "react";
import { Input, Button, Modal} from "antd";
import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";
import { useContext } from "react";
import { LoginContext } from "../App";
import SearchBar from "../components/SearchBar"

export interface ModalContext {
  isModalVisible: boolean,
  openModal: () => void,
  closeModal: () => void

}
//@ts-ignore
  export const ModalContext = React.createContext<ModalContext>(undefined)

  const CharacterListPage= () => {
  const loginContext = useContext(LoginContext);

  

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  
  const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
    setIsModalVisible(!isModalVisible);
  }; 

  const value = {
    isModalVisible: isModalVisible,
    openModal: () => {
      setIsModalVisible(true)
    },
      closeModal: ()=> {
        setIsModalVisible(false)
      }

    };
  
  return (
    
    // <Layout>
    <div> 
      <header>LOGO</header>
      <ModalContext.Provider value={value}> 
      <SearchBar />
      <Button onClick={() => loginContext.logout()}>LOG OUT</Button>
      <CharacterList />
      <Modal open={isModalVisible}
          onOk={() => {
            setIsModalVisible(false);
          }}
          onCancel={() => {
            setIsModalVisible(false)}}
            >INFO</Modal>
            </ModalContext.Provider>
    </div>
  );
};
export default CharacterListPage;
