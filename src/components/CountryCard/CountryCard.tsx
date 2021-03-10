import React from 'react';
import './CountryCard.scss';

import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

const CountryCard: React.FC<any> = (props) => {
  const { countryName, countyImage, countyDescr, countyId } = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  const classes = useStyles();

  return (
    <div className='CountryCard'>
      <Card className={classes.root}>
        <Link to={`/country/${countyId}`}>
          <CardHeader title={countryName} />
        </Link>

        <CardMedia
          className={classes.media}
          image={countyImage}
          title={countryName}
        />

        <CardContent>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
          >
            {countyDescr}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default CountryCard;
