import MobileMenu from "./mobileMenu/MobileMenu";
import SearchBar from "./searchBar/SearchBar";

const Header = () => {
  return (
    <div>
      <nav>
        <MobileMenu/>
        <SearchBar/>
      </nav>
    </div>
  );
};

export default Header;
