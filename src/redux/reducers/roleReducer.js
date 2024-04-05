import { REMOVE_ROLE, SET_ROLE } from "../../utils/constants";
import useLocalStorage from "./../../utils/customHooks/useLocalStorage";

const { getItem, setItem, removeItem } = useLocalStorage("role");

const initialState = getItem() || {
  isAuth: false,
  admin: null,
  user: null,
  builder: null
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE: {
      const { roleType, roleData } = action.payload;
      const newState = { ...state, isAuth: true, [roleType]: roleData };
      setItem(newState);
      return newState;
    }
    case REMOVE_ROLE: {
      removeItem();
      return {
        isAuth: false,
        admin: null,
        user: null,
        builder: null
      };
    }
    default: {
      return state;
    }
  }
};

export { roleReducer };
