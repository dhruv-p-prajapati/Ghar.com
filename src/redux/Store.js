import { combineReducers, createStore } from "redux";
import ThemeReducer from "./reducers/ThemeReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { roleReducer } from "./reducers/roleReducer";
import { appReducer } from "./reducers/appReducer";

const rootReducer = combineReducers({
  theme: ThemeReducer,
  app: appReducer,
  role: roleReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
