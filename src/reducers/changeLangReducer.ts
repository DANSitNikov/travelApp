import {LanguageTypes} from "../types";

const initialState = {
  data: [] as Array<LanguageTypes>,
};

interface ActionType {
  type: 'CHANGE_LANGUAGE'
  data: Array<LanguageTypes>
}

type InitialState = typeof initialState;

const changeLangReducer = (state = initialState, action: ActionType): InitialState => {
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
