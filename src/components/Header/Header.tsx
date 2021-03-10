import React, { useEffect } from 'react';

import './Header.scss';
import { MenuItem, FormControl, Select } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import {
  fetchCountries,
  fetchRuCountries,
} from '../../actions/countriesActions';
import { setLanguage } from '../../actions/appActions';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const lang = useSelector((state: any) => {
    return state.app.lang;
  });

  useEffect(() => {
    switch (lang) {
      case 'EN':
        dispatch(fetchCountries());
        break;
      case 'RU':
        dispatch(fetchRuCountries());
        break;
      default:
        dispatch(fetchCountries());
        break;
    }
  }, [lang, dispatch]);

  const handleLangChange = (event: any) => {
    dispatch(setLanguage(event.target.value));
  };

  return (
    <header className='Header'>
      <p>Header</p>

      <FormControl className='Header__language-selector'>
        <Select value={lang} onChange={handleLangChange} displayEmpty>
          <MenuItem value={'EN'}>EN</MenuItem>
          <MenuItem value={'RU'}>RU</MenuItem>
        </Select>
      </FormControl>
    </header>
  );
};

export default Header;
