import { CountryThunk } from '../types';

export const FETCH_COUNTRIES = 'FETCH_COUNTRIES';

export const fetchCountries = (url: string): CountryThunk => {
  return async (dispatch) => {
    try {
      const response: Response = await fetch(
        `https://newcountyapi.herokuapp.com/${url}`,
      );
      const result: Response = await response.json();
      dispatch({ type: FETCH_COUNTRIES, payload: result });
    } catch (error) {
      console.log(error as Error);
    }
  };
};
