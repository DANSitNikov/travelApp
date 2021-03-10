import React, { useState, useEffect } from 'react';

import './Header.scss';
import { MenuItem, FormControl, Select } from '@material-ui/core';

import { useDispatch } from 'react-redux';
import {
  fetchCountries,
  fetchRuCountries,
} from '../../actions/countriesActions';

const Header: React.FC = () => {
  const [lang, setLang] = useState<string>('');

  const dispatch = useDispatch();

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
  }, [lang]);

  const handleLangChange = (event: any) => {
    setLang(event.target.value);
  };

  return (
    <header className='Header'>
      <p>Header</p>

      <FormControl className='Header__language-selector'>
        <Select value={lang} onChange={handleLangChange} displayEmpty>
          <MenuItem value='' disabled>
            Language
          </MenuItem>
          <MenuItem value={'EN'}>EN</MenuItem>
          <MenuItem value={'RU'}>RU</MenuItem>
        </Select>
      </FormControl>
    </header>
  );
};

export default Header;
