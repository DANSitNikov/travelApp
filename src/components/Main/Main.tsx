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
    <Container className={classes.root}>
      <Grid container spacing={6}>
        {cards}
      </Grid>
    </Container>
  );
}

export default Main;
