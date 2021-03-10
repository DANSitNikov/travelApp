export const fetchCountries = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(
        'https://newcountyapi.herokuapp.com/countries',
      );
      const result = await response.json();
      dispatch({ type: 'FETCH_COUNTRIES', payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchRuCountries = () => {
  return async (dispatch: any) => {
    try {
      const response = await fetch(
        'https://newcountyapi.herokuapp.com/countries_ru',
      );
      const result = await response.json();
      dispatch({ type: 'FETCH_RU_COUNTRIES', payload: result });
    } catch (error) {
      console.log(error);
    }
  };
};
