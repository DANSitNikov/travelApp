import { AppTypes } from '../types';

const initialState: AppTypes = {
  lang: 'EN',
};

export const appReducer = (
  state: AppTypes = initialState,
  action: { type: 'SET_LANGUAGE'; payload: string },
): AppTypes => {
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
