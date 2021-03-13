import React from "react";
import { Link } from "react-router-dom";
import SelectLang from "./selectLang/SelectLang";
import SearchCountryContainer from "./searchCountry/searchCountryContainer";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      padding: '10px 5px',
      backgroundColor: 'rgba(255,255,255,0.8)',
      zIndex: 10,
    },
    selectItem: {
      textAlign: 'right',
   //   visibility: 'hidden',      transfer this parameter to global state!!!!
    },
    logo: {
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
    }
  }),
);

const Header = () => {
  const classes = useStyles();

    return(
        <Grid container className={classes.root}>
          <Grid container item sm={6} xs={4} className={classes.logo}>
            <Grid item sm={2} xs={6}>
              <Link to="/"><img width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1841/1841630.png" alt="home page"/></Link>
            </Grid>
            <Grid item sm={1} xs={6}>
              <SelectLang />
            </Grid>
          </Grid>
          <Grid item sm={6} xs={8} className={classes.selectItem}>
            <SearchCountryContainer />
          </Grid>
        </Grid>
    );
};

export default Header;
