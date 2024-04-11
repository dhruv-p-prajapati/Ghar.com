import Input from "./Input";
import PropTypes from "prop-types";

const SearchComponent = ({ query, setQuery }) => {
  return (
    <Input
      id="search"
      name="search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      labelText="Search"
      placeholder="Search property by name, city, state"
    />
  );
};

SearchComponent.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default SearchComponent;
