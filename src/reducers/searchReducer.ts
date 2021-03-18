const initialState = {
  inputValue: '',
  visibility: true,
};

const searchReducer = (state = initialState, action: any) => {
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

export const changeInputValue = (value: string) => ({
  type: 'CHANGE_INPUT_VALUE',
  value,
});

export const changeVisibilityToFalse = () => ({
  type: 'CHANGE_VISIBILITY_TO_FALSE',
});

export const changeVisibilityToTrue = () => ({
  type: 'CHANGE_VISIBILITY_TO_TRUE',
});

export default searchReducer;
