import {ActionsType} from "../reducers/rootReducer";

const searchAction = {
  changeInputValue: (value: string) => ({
    type: 'CHANGE_INPUT_VALUE',
    value,
  } as const),
  changeVisibilityToFalse: () => ({
    type: 'CHANGE_VISIBILITY_TO_FALSE',
  } as const),
  changeVisibilityToTrue: () => ({
    type: 'CHANGE_VISIBILITY_TO_TRUE',
  } as const),
}

export type SearchActionType = ActionsType<typeof searchAction>;

export default searchAction;
