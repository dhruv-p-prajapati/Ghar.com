import { SET_LOADER } from "../../utils/constants";

export const setLoader = (loader) => {
  return {
    type: SET_LOADER,
    payload: loader
  };
};
