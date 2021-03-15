import React, {useEffect, useRef} from "react";
import {Input} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import style from './SearchCountry.module.scss';

const SearchCountry: React.FC<any> = (props) => {
  const inputValueLocal = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      const {key} = e;
      if (key === 'Enter') {
        e.preventDefault();
      }
    };

    document.addEventListener('keydown', keyboardHandler);

    return () => {
      document.removeEventListener('keydown', keyboardHandler);
    };
  });

  const cleanContent = () => {
    if (inputValueLocal && inputValueLocal.current) {
      inputValueLocal.current.value = '';
      props.changeInputValue(inputValueLocal.current.value);
    }
  };

  const searchCountry = () => {
    if (inputValueLocal && inputValueLocal.current) {
      props.changeInputValue(inputValueLocal.current.value.toLowerCase());
    }
  };

  return (
    <Paper component="form" className={style.searchCountry}>
      <Input
        onChange={searchCountry}
        autoComplete='off'
        inputRef={inputValueLocal}
        type="text"
        autoFocus={true}
        placeholder="search country"
      />

      <IconButton
        onClick={cleanContent}
        className={style.iconButton}
      >
        <CloseIcon/>
      </IconButton>

      <Divider
        className={style.divider}
        orientation="vertical"
      />

      <IconButton
        color="primary"
        className={style.iconButton}
        aria-label="directions"
      >
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default SearchCountry;
