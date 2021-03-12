import React from "react";
import { Link } from "react-router-dom";
import style from './Main.module.scss';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});


const Main: React.FC<any> = (props) => {
  const classes = useStyles();
  const { data, inputValue } = props;
  const cards = data.map((card: { id: number, country: string }) => {
    console.log(card.country.toLowerCase());
    console.log(card.country.toLowerCase().includes(inputValue));
    if (card.country.toLowerCase().includes(inputValue)) {
      return <Link to={"country/" + card.id}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Business_Centre_of_Moscow_2.jpg/270px-Business_Centre_of_Moscow_2.jpg"
              title="Country picture"
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="h2">
                Country: {card.country} <br/>
                Capital: London
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>;
    }
  });

  return (
    <div className={style.mainPage}>
      {cards}
    </div>
  );
}

export default Main;
