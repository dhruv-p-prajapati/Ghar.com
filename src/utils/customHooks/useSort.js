import React, { useState } from "react";

const useSort = (properties) => {
  // tokenAmount, price
  const [sortBy, setSortBy] = useState("default");
  const [descending, setDescending] = useState(false);

  let sortedProperties = [...properties];

  if (sortBy === "price" || sortBy === "tokenAmount") {
    sortedProperties = properties.sort((a, b) => {
      const valueA = parseFloat(a[sortBy]);
      const valueB = parseFloat(b[sortBy]);

      return descending ? valueB - valueA : valueA - valueB;
    });
  }
  return [sortBy, setSortBy, descending, setDescending, sortedProperties];
};

export default useSort;
