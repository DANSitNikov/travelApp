import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Card, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
  },
  media: {
    height: 140,
  },
});

type card = {
  countryName: string,
  countryCapital: string,
}

const CountryCard = ({countryName, countryCapital}: card) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Business_Centre_of_Moscow_2.jpg/270px-Business_Centre_of_Moscow_2.jpg"
          title="Country picture"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Country: {countryName}
          </Typography>
          <Typography variant="h6" component="h2">
            Capital: {countryCapital}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CountryCard;
