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
      marginBottom: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      padding: '10px 5px',
      backgroundColor: 'white',
      zIndex: 10,
    },
    selectItem: {
      textAlign: 'right',
    },
    logo: {
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
    }
  }),
);

const Header = () => {
  const [closeStatus, setStatus] = useState(false);
  const classes = useStyles();

  const closeIt = () => {
    setStatus(!closeStatus);
  };

    return(
        <Grid container className={classes.root} spacing={1}>
          <Grid container item sm={3} xs={4} className={classes.logo}>
            <Grid item sm={2} xs={6}>
              <Link to="/"><img width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1841/1841630.png" alt="home page"/></Link>
            </Grid>
            <Grid item sm={1} xs={6}>
              <SelectLang />
            </Grid>
          </Grid>
          <Grid item sm={9} xs={8} className={classes.selectItem}>
            {!closeStatus && <SearchCountryContainer />}
          </Grid>
          {/*<button onClick={closeIt}>cleaning</button>*/}
        </Grid>
    );
};

export default Header;
