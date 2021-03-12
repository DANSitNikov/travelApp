import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectLang from "./selectLang/SelectLang";
import SearchCountryContainer from "./searchCountry/searchCountryContainer";
import {createStyles, FormControl, MenuItem, Select} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
      marginBottom: 30,
    },
  }),
);

const Header = () => {
  const [closeStatus, setStatus] = useState(false);
  const classes = useStyles();

  const closeIt = () => {
    setStatus(!closeStatus);
  };

    return(
        <Grid container className={classes.root}>
          <Grid item xs={1}>
            <Link to="/"><img width="50px" height="50px" src="https://image.flaticon.com/icons/png/512/1841/1841630.png" alt="home page"/></Link>
          </Grid>
          <Grid item xs={10}>
            {!closeStatus && <SearchCountryContainer />}
          </Grid>
          <Grid item xs={1}>
            <SelectLang />
          </Grid>
          {/*<button onClick={closeIt}>cleaning</button>*/}
        </Grid>
    );
};

export default Header;
