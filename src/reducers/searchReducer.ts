const initialState = {
  inputValue: '',
};

const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        inputValue: action.value,
      }
    default:
      return state;
  }
};

export const changeInputValue = (value: string) => ({
  type: 'CHANGE_INPUT_VALUE',
  value,
});

export default searchReducer;
