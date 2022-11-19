import MobileMenu from "./mobileMenu/MobileMenu";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <header>
        <nav>
          <MobileMenu />
          <SearchBar />
        </nav>
      </header>
    </div>
  );
};

export default Header;
