import React from "react";
import { Link } from "react-router-dom";
import SelectLang from "./selectLang/SelectLang";
import SearchCountryContainer from "./searchCountry/searchCountryContainer";
import Grid from "@material-ui/core/Grid";
import style from './Header.module.scss';

const Header = () => {
    return(
        <Grid container className={style.header}>
          <Grid container item sm={6} xs={4} className={style.logoAndLang}>
            <Grid item sm={2} xs={6}>
              <Link to="/"><img width="40px" height="40px" src="https://image.flaticon.com/icons/png/512/1841/1841630.png" alt="home page"/></Link>
            </Grid>
            <Grid item sm={1} xs={6}>
              <SelectLang />
            </Grid>
          </Grid>
          <Grid item sm={6} xs={8} className={style.selectItem}>
            <SearchCountryContainer />
          </Grid>
        </Grid>
    );
};

export default Header;
