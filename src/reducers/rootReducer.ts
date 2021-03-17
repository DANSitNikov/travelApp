import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { countriesReducer } from './countriesReducer';
import searchReducer from "./searchReducer";
import changeLangReducer from "./changeLangReducer";

export const rootReducer = combineReducers({
  countries: countriesReducer,
  search: searchReducer,
  app: appReducer,
  languages: changeLangReducer,
});
