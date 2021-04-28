import axios from 'axios';
import { setUser } from '../reducers/userReducer';

export const registration = async (
  email: string,
  password: string,
  name: string,
) => {
  try {
    await axios.post(
      `https://newcountyapi.herokuapp.com/auth/registration`,
      {
        email,
        password,
        name,
      },
    );
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = (email: any, password: any) => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      const response = await axios.post(
        `https://newcountyapi.herokuapp.com/auth/login`,
        {
          email,
          password,
        },
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      alert(e.response.data.message);
    }
  };
};

export const auth = () => {
  return async (dispatch: (arg0: any) => void) => {
    try {
      const response = await axios.get(
        `https://newcountyapi.herokuapp.com/auth/auth`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      dispatch(setUser(response.data.user));
      localStorage.setItem('token', response.data.token);
    } catch (e) {
      console.log(
        `${e.response.data.message}: You are not authorized`,
      );
      localStorage.removeItem('token');
    }
  };
};
