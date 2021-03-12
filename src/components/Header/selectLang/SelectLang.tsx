import React, {useEffect, useRef} from "react";
import {FormControl, MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../types";
import {fetchCountries} from "../../../actions/countriesActions";
import {setLanguage} from "../../../actions/appActions";

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

  return (
    <FormControl className='Header__language-selector'>
      <Select value={lang} onChange={handleLangChange} displayEmpty>
        <MenuItem value={'EN'}>EN</MenuItem>
        <MenuItem value={'RU'}>RU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
