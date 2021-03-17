import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { login } from '../../actions/userActions';
import {useDispatch, useSelector} from 'react-redux';
import style from './Login.module.scss';
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import {RootState} from "../../types";

const Login = () => {
  const language = useSelector((state: RootState) => {
    return state.languages.data;
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className={style.Login}>
      <form>
        <div className={style.inputField}>
          <Input
            placeholder={language.email}
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='email'></label>
        </div>

        <div className={style.inputField}>
          <Input
            placeholder={language.password}
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor='email'></label>
        </div>

        <Button
          color='primary'
          onClick={(e) => {
            e.preventDefault();
            history.push('/');
            return dispatch(login(email, password));
          }}
        >
          {language.login}
        </Button>
      </form>
    </div>
  );
};

export default Login;
