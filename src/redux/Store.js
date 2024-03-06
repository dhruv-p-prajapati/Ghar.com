import { combineReducers, createStore } from 'redux';
import ThemeReducer from './reducers/ThemeReducer';
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    theme: ThemeReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;