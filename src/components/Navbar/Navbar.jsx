import React from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import './Navbar.scss';
import { logout } from '../../reducers/userReducer';

const Navbar = () => {
  const isAuth = useSelector((state) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <div className='Navbar'>
      <nav>
        <div className='nav-wrapper'>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            {!isAuth && (
              <li>
                <Link to='/login'>Login</Link>
              </li>
            )}
            {!isAuth && (
              <li>
                <Link to='/registration'>Register</Link>
              </li>
            )}
            {isAuth && (
              <li>
                <a onClick={() => dispatch(logout())}>Logout</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
