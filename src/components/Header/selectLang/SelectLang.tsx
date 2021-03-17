import React, {useEffect} from "react";
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../types";
import {fetchCountries} from "../../../actions/countriesActions";
import {setLanguage} from "../../../actions/appActions";
import style from './SelectLang.module.scss';
import rus from '../../../assets/icons/russia.svg';
import esp from '../../../assets/icons/spain.svg';
import uk from '../../../assets/icons/uk.svg';

const SelectLang = () => {
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
      case 'ES':
        dispatch(fetchCountries('countries_es'));
        break;
      default:
        dispatch(fetchCountries('countries'));
        break;
    }
  }, [lang, dispatch]);

  const handleLangChange = (
    event: React.ChangeEvent<{ value: unknown }>,
  ) => {
    localStorage.setItem('language', JSON.stringify(event.target.value as string));
    dispatch(setLanguage(event.target.value as string));
  };

  if (localStorage && localStorage.getItem('language')) {
    const setLang = localStorage.getItem('language');
    if (setLang !== null) dispatch(setLanguage(JSON.parse(setLang)))
  }

  return (
    <FormControl className='Header__language-selector'>
      <Select className={style.select} value={lang} onChange={handleLangChange} displayEmpty>
        <MenuItem value={'EN'}>
          <img src={uk} alt=""/>
        </MenuItem>
        <MenuItem value={'RU'}>
          <img src={rus} alt=""/>
        </MenuItem>
        <MenuItem value={'ES'}>
          <img src={esp} alt=""/>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
