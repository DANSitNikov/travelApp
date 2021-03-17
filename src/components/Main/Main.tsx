import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import CountryCard from "./cards/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import style from './Main.module.scss';

const Main: React.FC<any> = (props) => {
  const { inputValue, changeVisibilityToTrue, language } = props;
  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });

  useEffect(() => {
    changeVisibilityToTrue();
  });

  const sortedCountriesArray = countriesArray.sort((a, b) => b.population - a.population);

  const cards = sortedCountriesArray.map((card: {_id: string, name: string, capital: string, shortDescription: string, mainImage: string, alpha2Code: string, alpha3Code: string}) => {
    if (card.name.toLowerCase().includes(inputValue) || card.capital.toLowerCase().includes(inputValue) || card.name.toUpperCase().includes(inputValue) || card.capital.toUpperCase().includes(inputValue)) {
      return (
        <Grid key={card.alpha3Code} item xs={12} sm={6} md={4} className={style.card}>
          <Link to={"country/" + card.alpha3Code} className={style.cardHref}>
            <CountryCard language={language} countryName={card.name} countryCapital={card.capital} image={card.mainImage} alpha2Code={card.alpha2Code} shortDescription={card.shortDescription} />
          </Link>
        </Grid>
      );
    }
    return;
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
