import { Outlet } from "react-router-dom";
import MobileMenu from "./mobileMenu/MobileMenu";
import NavBar from "./navBar/NavBar";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <MobileMenu />
          <NavBar isColumn={false} />
          <SearchBar />
        </nav>
        
      </header>
      
      <Outlet context={{ value: "" }} />
    </>
  );
};

export default Header;
