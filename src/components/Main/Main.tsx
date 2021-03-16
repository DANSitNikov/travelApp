import React from "react";
import { Link } from "react-router-dom";
import CountryCard from "./cards/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import style from './Main.module.scss';

const Main: React.FC<any> = (props) => {
  const { inputValue } = props;
  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  const cards = countriesArray.map((card: { _id: string, name: string, capital: string, shortDescription: string, mainImage: string, alpha2Code: string, alpha3Code: string }) => {
    if (card.name.toLowerCase().includes(inputValue) || card.capital.toLowerCase().includes(inputValue)) {
      return (
        <Grid key={card.alpha3Code} item xs={12} sm={6} md={4} className={style.card}>
          <Link to={"country/" + card.alpha3Code} className={style.cardHref}>
            <CountryCard countryName={card.name} countryCapital={card.capital} image={card.mainImage} alpha2Code={card.alpha2Code} shortDescription={card.shortDescription} />
          </Link>
        </Grid>
      );
    }
  });

  return (
    <Container className={style.mainPage}>
      <Grid container spacing={6}>
        {cards}
      </Grid>
    </Container>
  );
}

export default Main;
