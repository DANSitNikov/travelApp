import React, {useEffect} from "react";
import {createStyles, FormControl, MenuItem, Select} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../types";
import {fetchCountries} from "../../../actions/countriesActions";
import {setLanguage} from "../../../actions/appActions";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
  createStyles({
    select: {
      color: 'black',
      backgroundColor: 'white',
      borderRadius: 4,
    },
  }),
);

const SelectLang = () => {
  const dispatch = useDispatch<Dispatch<any>>();
  const classes = useStyles();

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
      <Select className={classes.select} value={lang} onChange={handleLangChange} displayEmpty>
        <MenuItem value={'EN'}>EN</MenuItem>
        <MenuItem value={'RU'}>RU</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectLang;
