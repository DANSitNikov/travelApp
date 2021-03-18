import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Navbar.module.scss';
import { logout } from '../../reducers/userReducer';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { RootState } from "../../types";

const Navbar = () => {
  const language = useSelector((state: RootState) => {
    return state.languages.data;
  });
  const isAuth = useSelector((state: any) => state.user.isAuth);
  let user = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <div>
      {!isAuth && (
        <Grid container className={style.notAuthed}>
          <Grid item sm={4}>
            <Button size="small" color="primary" className={style.button}>
              <Link to='/login'>{language.login}</Link>
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button size="small" variant="contained" color="primary" className={style.button}>
              <Link to='/registration'>{language.register}</Link>
            </Button>
          </Grid>
        </Grid>
      )}
      {isAuth && (
        <Grid container className={style.authed}>
          <Grid item sm={4}>
            <p>
              {`${language.hello}, ${user.name.charAt(0).toUpperCase() + user.name.slice(1)
                }`}
            </p>
          </Grid>
          <Grid item sm={4}>
            <Button variant="contained" color="secondary" size="small" className={style.button}>
              <a href='/#' onClick={() => dispatch(logout())}>{language.logout}</a>
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Navbar;
