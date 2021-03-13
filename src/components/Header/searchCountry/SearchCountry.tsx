import React, {useEffect, useRef} from "react";
import {createStyles, Input, Theme} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 300,
      margin: '0 auto',
      height: 35,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }),
);


const SearchCountry: React.FC<any> = (props) => {
  const inputValueLocal = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  useEffect(() => {
    const keyboardHandler = (e: KeyboardEvent) => {
      const {key} = e;
      if (key === 'Enter') {
        if (inputValueLocal && inputValueLocal.current) {
          props.changeInputValue(inputValueLocal.current.value);
        }
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
      props.changeInputValue(inputValueLocal.current.value);
    }
  };

  return (
    <Paper component="form" className={classes.root}>
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
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <CloseIcon/>
      </IconButton>

      <Divider
        className={classes.divider}
        orientation="vertical"
      />

      <IconButton
        color="primary"
        className={classes.iconButton}
        aria-label="directions"
      >
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
};

export default SearchCountry;
