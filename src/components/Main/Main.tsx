import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./cards/Card";
import {createStyles} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      textAlign: 'center',
    }
  }),
);

const Main: React.FC<any> = (props) => {
  const { data, inputValue } = props;
  const classes = useStyles();

  const cards = data.map((card: { id: number, country: string }) => {
    if (card.country.toLowerCase().includes(inputValue)) {
      return (
        <Grid item xs={12} sm={6} md={3} className={classes.card}>
            <Link to={"country/" + card.id}>
              <CountryCard countryName={card.country}/>
            </Link>
        </Grid>
      );
    }
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={6}>
        {cards}
      </Grid>
    </div>
  );
}

export default Main;
