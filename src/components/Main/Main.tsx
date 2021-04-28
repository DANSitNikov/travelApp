import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./cards/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../../types";
import style from './Main.module.scss';
import Loader from "../Country/Loader";
import searchAction from "../../actions/searchAction";

const Main: React.FC<any> = (props) => {
  const { inputValue, language } = props;
  const countriesArray = useSelector((state: RootState) => {
    return state.countries;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAction.changeVisibilityToTrue());
    window.scrollTo(0, 0);
  }, []);

  const sortedCountriesArray = countriesArray.sort((a, b) => b.population - a.population);

  const cards = sortedCountriesArray.map((card: { _id: string, name: string, capital: string, shortDescription: string, mainImage: string, alpha2Code: string, alpha3Code: string }) => {
    if (card.name.toLowerCase().includes(inputValue) || card.capital.toLowerCase().includes(inputValue) || card.name.toUpperCase().includes(inputValue) || card.capital.toUpperCase().includes(inputValue)) {
      return (
        <Grid key={card.alpha3Code} item xs={12} sm={6} md={4} className={style.card}>
          <Link to={"country/" + card.alpha3Code} className={style.cardHref}>
            <CountryCard language={language} countryName={card.name} countryCapital={card.capital} image={card.mainImage} alpha2Code={card.alpha2Code} shortDescription={card.shortDescription} />
          </Link>
        </Grid>
      );
    }
    return null;
  });

  return (
    countriesArray.length > 0
    ? (
        <Container className={style.mainPage}>
          <Grid container spacing={6}>
            {cards}
          </Grid>
        </Container>
      )
      : (
        <Loader />
      )
  );
}

export default Main;
