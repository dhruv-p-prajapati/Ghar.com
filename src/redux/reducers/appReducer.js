import { SET_LOADER } from "../../utils/constants";

const initialState = {
  loader: false
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      return { loader: action.payload };

    default:
      return state;
  }
};
