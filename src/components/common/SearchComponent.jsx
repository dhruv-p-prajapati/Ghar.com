import Input from "./Input";
import PropTypes from "prop-types";

const SearchComponent = ({ query, setQuery, setCurrPage }) => {
  return (
    <Input
      id="search"
      name="search"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        if (setCurrPage) {
          setCurrPage(1);
        }
      }}
      labelText="Search"
      placeholder="Search property by name, city, state"
    />
  );
};

SearchComponent.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
  setCurrPage: PropTypes.func
};

export default SearchComponent;
