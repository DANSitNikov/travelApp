import { User } from "../types";

const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

const initialState = {
  currentUser: {} as User,
  isAuth: false as boolean,
};

type InitialState = typeof initialState;

const usersReducer = (state = initialState, action: any): InitialState => {
  console.log(state.currentUser, ' cur ');
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: {},
        isAuth: false,
      };
    default:
      return state;
  }
};

export const setUser = (user: User) => ({
  type: SET_USER,
  payload: user,
});
export const logout = () => ({ type: LOGOUT });

export default usersReducer;
