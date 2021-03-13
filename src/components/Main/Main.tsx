import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./cards/Card";
import {createStyles} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '100% !important',
      marginTop: '80px',
      marginBottom: '100px',
    },
    card: {
      textAlign: 'left',
    },
    cardHref: {
      textDecoration: 'none !important',

    }
  }),
);

const Main: React.FC<any> = (props) => {
  const { data, inputValue } = props;
  const classes = useStyles();

  const cards = data.map((card: { id: number, country: string, capital: string }) => {
    if (card.country.toLowerCase().includes(inputValue) || card.capital.toLowerCase().includes(inputValue)) {
      return (
        <Grid key={card.id} item xs={12} sm={6} md={3} className={classes.card}>
            <Link to={"country/" + card.id} className={classes.cardHref}>
              <CountryCard countryName={card.country} countryCapital={card.capital}/>
            </Link>
        </Grid>
      );
    }
  });

  return (
    <Container className={classes.root}>
      <Grid container spacing={6}>
        {cards}
      </Grid>
    </Container>
  );
}

export default Main;
