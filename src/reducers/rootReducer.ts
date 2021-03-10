import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { countriesReducer } from './countriesReducer';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  app: appReducer,
});
