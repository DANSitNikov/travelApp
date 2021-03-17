import React, { useState } from 'react';
import { registration } from '../../actions/userActions';
import style from './Registration.module.scss';
import { useHistory } from 'react-router-dom';
import {Button} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import {useSelector} from "react-redux";
import {RootState} from "../../types";

const Registration = () => {
  const language = useSelector((state: RootState) => {
    return state.languages.data;
  });
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  return (
    <div className={style.Registration}>
      <form>
        <div className={style.inputField}>
          <Input
            placeholder={language.name}
            type='text'
            value={name}
            required={true}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor='email'></label>
        </div>

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
            if (name.length) {
              e.preventDefault();
              registration(email, password, name);
              setName('');
              setEmail('');
              setPassword('');
              history.push('/login');
            }
          }}
        >
          {language.register}
        </Button>
      </form>
    </div>
  );
};

export default Registration;
