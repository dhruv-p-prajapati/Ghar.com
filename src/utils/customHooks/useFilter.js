import { useState } from "react";

const useFilter = (properties) => {
  const [propertyType, setPropertyType] = useState("all");
  const [subPropertyType, setSubPropertyType] = useState("all");
  const [lookingFor, setLookingFor] = useState("all");
  const [verifiedByAdmin, setVerifiedByAdmin] = useState(false);

  const filteredProperty = [...properties].filter(
    (property) =>
      (propertyType === "all" || property.propertyType === propertyType) &&
      (subPropertyType === "all" || property.subPropertyType === subPropertyType) &&
      (lookingFor === "all" || property.lookingFor === lookingFor) &&
      (!verifiedByAdmin || property.verifyStatusAdmin === true)
  );

  return [
    propertyType,
    setPropertyType,
    subPropertyType,
    setSubPropertyType,
    lookingFor,
    setLookingFor,
    verifiedByAdmin,
    setVerifiedByAdmin,
    filteredProperty
  ];
};

export default useFilter;
