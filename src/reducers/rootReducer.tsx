import { combineReducers } from 'redux';
import { countriesReducer } from './countriesReducer';

export const rootReducer = combineReducers({
  countries: countriesReducer,
});
