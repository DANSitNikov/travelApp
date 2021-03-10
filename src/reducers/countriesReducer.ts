const initialState = {
  countriesArray: [],
};

export const countriesReducer = (
  state: any = initialState,
  action: any,
): any => {
  switch (action.type) {
    case 'FETCH_COUNTRIES':
      return {
        ...state,
        countriesArray: action.payload,
      };
    case 'FETCH_RU_COUNTRIES':
      return {
        ...state,
        countriesArray: action.payload,
      };
    default:
      return state;
  }
};
