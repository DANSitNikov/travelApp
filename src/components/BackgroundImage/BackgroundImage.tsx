import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import balloons from '../../assets/defaultBack/hot-air-baloons.jpg';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      minWidth: '100vw',
      minHeight: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      backgroundImage: `url(${balloons})`,
      backgroundRepeat: 'no-repeat',
      zIndex: -5,
    }
  }),
);

const BackgroundImage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}></div>
  );
};

export default BackgroundImage;
