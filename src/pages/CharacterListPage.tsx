import React from "react";
import { Input, Button, Modal} from "antd";
import CharacterList from "../components/CharacterList";
import Layout from "../components/Layout";
import { useContext } from "react";
import { LoginContext } from "../App";
import SearchBar from "../components/SearchBar"



  const CharacterListPage= () => {
  const loginContext = useContext(LoginContext);

  

  const [isModalVisible, setIsModalVisible] = React.useState(false);
  



  
  return (
    
    // <Layout>
    <div> 
      <header>LOGO</header>
      <SearchBar />
      <Button onClick={() => loginContext.logout()}>LOG OUT</Button>
      <CharacterList />
      
    </div>
  );
};
export default CharacterListPage;
