import { CountryTypes } from '../types';

const initialState: Array<CountryTypes> = [];

export const countriesReducer = (
  state: Array<CountryTypes> = initialState,
  action: { type: 'FETCH_COUNTRIES'; payload: Array<CountryTypes> },
): Array<CountryTypes> => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return action.payload;
    default:
      return state;
  }
};
