import React from "react";
import "../styles/main.scss";
import { NavLink } from "react-router-dom";
import { LoginContext } from "../App";
import { Divide as Hamburger } from "hamburger-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [isPhone, setIsPhone] = React.useState(false);

  const loginContext = React.useContext(LoginContext);

 React.useEffect(() => {
    const isPhone = window.matchMedia("(max-width: 600px)").matches;

    if (isPhone) setIsPhone(isPhone);



    window.addEventListener("resize", detectLayout);
  },
  []);

  const detectLayout = () => {
    const isPhone = window.matchMedia("(max-width: 600px)").matches;

    setIsPhone(isPhone);


  };
  return (
    <div className="header">
      <NavLink
        onClick={() => setMenuOpen(false)}
        style={{
          textDecoration: "none",
          position: "absolute",
          top: 0,
          left: 0,
        }}
        to={"/character-list-page"}
      >
        LOGO
      </NavLink>
      <div className="hamburger">
        <Hamburger
          rounded
          distance="sm"
          size={30}
          toggle={() => setMenuOpen((prevstate) => !prevstate)}
          toggled={menuOpen}
        />
      </div>

      {menuOpen ? (
        <div className="navbar-mobile">
          <NavLink
            className="navLink"
            to={"/favorites"}
            onClick={() => setMenuOpen(false)}
          >
            FAVORITES
          </NavLink>
          <NavLink
            className="navLink"
            onClick={() => loginContext.logout()}
            to={"/*"}
          >
            LOG OUT
          </NavLink>
        </div>
      ) : isPhone ? <div></div> : (
        <div>
          <NavLink
            className="navLink"
            to={"/favorites"}
            onClick={() => setMenuOpen(false)}
          >
            FAVORITES
          </NavLink>
          <NavLink
            className="navLink"
            onClick={() => loginContext.logout()}
            to={"/*"}
          >
            LOG OUT
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Header;
