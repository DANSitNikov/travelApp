import {SearchActionType} from "../actions/searchAction";

const initialState = {
  inputValue: '' as string,
  visibility: true as boolean,
};

type InitialState = typeof initialState;

const searchReducer = (state = initialState, action: SearchActionType): InitialState => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.value,
      }
    case 'CHANGE_VISIBILITY_TO_FALSE':
      return {
        ...state,
        visibility: false,
      }
    case 'CHANGE_VISIBILITY_TO_TRUE':
      return {
        ...state,
        visibility: true,
      }
    default:
      return state;
  }
};

export default searchReducer;
