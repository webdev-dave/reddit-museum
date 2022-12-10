import { Outlet } from "react-router-dom";
import MobileMenu from "./mobileMenu/MobileMenu";
import NavBarRow from "./navBar/navBarRow/NavBarRow";
import SearchBar from "./searchBar/SearchBar";


const Header = () => {
  return (
    <>
      <header>
        <nav>
          <MobileMenu />
          <NavBarRow />
          <SearchBar />
        </nav>
      </header>
      <Outlet context={{ value: "" }} />
    </>
  );
};

export default Header;
