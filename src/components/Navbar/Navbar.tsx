import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './Navbar.module.scss';
import { logout } from '../../reducers/userReducer';
import { Button } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";

const Navbar = () => {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  let user = useSelector((state: any) => state.user.currentUser);
  const dispatch = useDispatch();

  return (
    <div>
      {!isAuth && (
        <Grid container className={style.notAuthed}>
          <Grid item sm={4}>
            <Button size="small" color="primary" className={style.button}>
              <Link to='/login'>Login</Link>
            </Button>
          </Grid>
          <Grid item sm={4}>
            <Button size="small" variant="contained" color="primary" className={style.button}>
              <Link to='/registration'>Register</Link>
            </Button>
          </Grid>
        </Grid>
      )}
      {isAuth && (
        <Grid container className={style.authed}>
          <Grid item sm={4}>
            <p>
              {`Hello, ${
                user.name.charAt(0).toUpperCase() + user.name.slice(1)
              }`}
            </p>
          </Grid>
          <Grid item sm={4}>
            <Button variant="contained" color="secondary" size="small" className={style.button}>
              <a onClick={() => dispatch(logout())}>Logout</a>
            </Button>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Navbar;
