import { REMOVE_ROLE, SET_ROLE } from "../../utils/constants";

export const setRole = (roleType, roleData) => {
  return {
    type: SET_ROLE,
    payload: {
      roleType,
      roleData
    }
  };
};

export const removeRole = () => {
  return {
    type: REMOVE_ROLE
  };
};
