const initialState = {
  lang: 'EN',
};

export const appReducer = (
  state: any = initialState,
  action: any,
): any => {
  switch (action.type) {
    case 'SET_LANGUAGE':
      return {
        ...state,
        lang: action.payload,
      };
    default:
      return state;
  }
};
