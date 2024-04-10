import React from "react";
import Input from "./Input";

const SearchComponent = ({ query, setQuery }) => {
  return <Input value={query} onChange={(e) => setQuery(e.target.value)} labelText="Search" placeholder="Search property by name, city, state" />;
};

export default SearchComponent;
