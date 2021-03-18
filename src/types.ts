import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { SET_LANGUAGE } from './actions/appActions';

// action types

export type CountryThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  Array<CountryTypes>,
  Action<string>
>;

export interface SetLanguage {
  type: typeof SET_LANGUAGE;
  payload: string;
}

// default types

export interface RootState {
  countries: Array<CountryTypes>;
  app: AppTypes;
  languages: any;
}

export interface AppTypes {
  lang: string;
}

export interface CountryTypes {
  alpha2Code: string;
  alpha3Code: string;
  _id: string;
  name: string;
  capital: string;
  capitalMarker: Array<Number>;
  geo: any;
  timezone: number;
  currency: string;
  region: string;
  population: number;
  mainImage: string;
  mainVideo: string;
  shortDescription: string;
  attractions: Array<{
    title: string;
    description: string;
    image: string;
  }>;
  __v?: number;
}

export interface LanguageTypes {
  capital: string;
  country: string;
  searchCountry: string;
  population: string;
  region: string;
}
