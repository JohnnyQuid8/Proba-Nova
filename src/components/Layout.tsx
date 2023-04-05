import LoginPage from "../pages/LoginPage";
import { Outlet, Link } from "react-router-dom";

interface Layout {
  children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
  return (
    <div>
      <div>
        <Link to="/">HomePage</Link>lib
        <Link to="/character-list-page">CharacterListPage</Link>
      </div>
      <div>{children}</div>
      <div>Footer</div>
    </div>
  );
}; 

export default Layout;
