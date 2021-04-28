import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { countriesReducer } from './countriesReducer';
import changeLangReducer from "./changeLangReducer";
import searchReducer from './searchReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  countries: countriesReducer,
  search: searchReducer,
  app: appReducer,
  languages: changeLangReducer,
  user: userReducer,
});

type RootReducer = typeof rootReducer;
export type GlobalState = ReturnType<RootReducer>;

type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never;
export type ActionsType<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>;
