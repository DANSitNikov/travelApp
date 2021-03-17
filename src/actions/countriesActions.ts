import { CountryThunk } from '../types';
import countries from '../assets/languages/countries.json';
import countries_ru from '../assets/languages/countries_ru.json';
import countries_es from '../assets/languages/countries_es.json';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

export const fetchCountries = (url: string): CountryThunk => {
  return async (dispatch) => {
    try {
      const response: Response = await fetch(
        `https://newcountyapi.herokuapp.com/${url}`,
      );
      const result: Response = await response.json();
      let localResult;
      if (url === 'countries') {
        localResult = countries;
      } else if (url === 'countries_ru') {
        localResult = countries_ru;
      } else {
        localResult = countries_es;
      }
      dispatch({ type: FETCH_COUNTRIES, payload: result });
      dispatch({ type: CHANGE_LANGUAGE, data: localResult });
    } catch (error) {
      console.log(error as Error);
    }
  };
};
