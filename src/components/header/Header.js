import MobileMenu from "./mobileMenu/MobileMenu";
import NavBar from "./navBar/NavBar";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <MobileMenu />
          <NavBar/>
          <SearchBar />
        </nav>
      </header>
    </div>
  );
};

export default Header;
