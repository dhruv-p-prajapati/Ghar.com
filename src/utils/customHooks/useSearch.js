import React, { useState } from "react";
import { useDebounce } from "./useDebounce";

const useSearch = (properties, ...keys) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);

  const searchedProperties = [...properties]?.filter((property) => {
    return keys.some((key) => {
      const keyParts = key.split(".");

      // property , address
      // property[address];

      // property[address] = address=>object, city
      // address[city];

      const propertyValue = keyParts.reduce((prevVal, currentKey) => {
        return prevVal && prevVal[currentKey];
      }, property);

      return propertyValue && propertyValue.toLowerCase().includes(debouncedQuery.toLowerCase());
    });
  });

  return [query, setQuery, searchedProperties];
};

export default useSearch;
