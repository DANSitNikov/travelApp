import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Card} from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import style from './Card.module.scss';

type card = {
  countryName: string,
  countryCapital: string,
  image: string,
  alpha2Code: string,
  shortDescription: string
}

const CountryCard = ({countryName, countryCapital, image, alpha2Code, shortDescription}: card) => {
  return (
    <Card className={style.card}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={style.avatar}>
              {alpha2Code}
            </Avatar>
          }
          title={`Country: ${countryName}`}
          subheader={`Capital: ${countryCapital}`}
        />
        <CardMedia
          className={style.countryImage}
          image={image}
          title="Country picture"
        />
        <CardContent>
          <Typography className={style.description} gutterBottom variant="h6" component="h3">
            {shortDescription}
          </Typography>
          <span className={style.ellipses}>...</span>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
