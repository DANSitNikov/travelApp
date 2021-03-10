import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';
import searchReducer from "./searchReducer";

export const rootReducer = combineReducers({
  countries: countriesReducer,
  search: searchReducer,
});
