import { Button} from "antd";
import { LoginContext } from "../App";
import { FavoritesContext } from "../AppMain";
import React from "react";

const Header = () => {
  const loginContext = React.useContext(LoginContext)
  const favoritesContext = React.useContext(FavoritesContext)
  return (
      <div>
        <div>LOGO</div>
        <Button onClick={() => loginContext.logout()}>LOG OUT</Button>
        <Button onClick={()=> favoritesContext.login()}>FAVORITES</Button>
        <Button onClick={()=> favoritesContext.logout()}>HOMEPAGE</Button>

      </div>
  );
}; 

export default Header;
