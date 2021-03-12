import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from './Header.module.scss';
import SelectLang from "./selectLang/SelectLang";
import SearchCountryContainer from "./searchCountry/searchCountryContainer";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../types";
import {fetchCountries} from "../../actions/countriesActions";
import {setLanguage} from "../../actions/appActions";
import {FormControl, MenuItem, Select} from "@material-ui/core";

const Header = () => {
  const [closeStatus, setStatus] = useState(false);


  const dispatch = useDispatch<Dispatch<any>>();

  const lang: string = useSelector((state: RootState) => {
    return state.app.lang;
  });

  useEffect(() => {
    switch (lang) {
      case 'EN':
        dispatch(fetchCountries('countries'));
        break;
      case 'RU':
        dispatch(fetchCountries('countries_ru'));
        break;
      default:
        dispatch(fetchCountries('countries'));
        break;
    }
  }, [lang, dispatch]);

  const handleLangChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    dispatch(setLanguage(event.target.value as string));
  };


  const closeIt = () => {
    setStatus(!closeStatus);
  };

    return(
        <header className={style.header}>
            <Link to="/">Back to main page</Link>
            {!closeStatus && <SearchCountryContainer />}

            <FormControl className='Header__language-selector'>
              <Select value={lang} onChange={handleLangChange} displayEmpty>
                <MenuItem value={'EN'}>EN</MenuItem>
                <MenuItem value={'RU'}>RU</MenuItem>
              </Select>
            </FormControl>

            <button onClick={closeIt}>cleaning</button>
        </header>
    );
};

export default Header;
