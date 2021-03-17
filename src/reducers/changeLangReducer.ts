import {LanguageTypes} from "../types";

const initialState = {
  data: [],
};

const changeLangReducer = (state = initialState, action: { type: 'CHANGE_LANGUAGE'; data: Array<LanguageTypes> }) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default changeLangReducer;