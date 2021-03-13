import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import balloons from '../../assets/defaultBack/hot-air-baloons.jpg';
import plain from '../../assets/defaultBack/plain.jpg';
import human from '../../assets/defaultBack/human.jpg';
import friends from '../../assets/defaultBack/friends.jpg';
import {useEffect, useRef} from "react";

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
      backgroundRepeat: 'no-repeat',
      zIndex: -5,
    },
    shadow: {
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    plain: {
      backgroundImage: `url(${plain})`,
    },
    human: {
      backgroundImage: `url(${human})`,
    },
    balloons: {
      backgroundImage: `url(${balloons})`,
    },
    friends: {
      backgroundImage: `url(${friends})`,
    },
  }),
);

const chooseImage = (): number => {
  return Math.ceil(Math.random() * 4);
};

const BackgroundImage = () => {
  const classes = useStyles();
  const backImg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const number: number = chooseImage();
    if (backImg.current) {
      if (number === 0) {
        backImg.current.classList.add(classes.plain);
      } else if (number === 1) {
        backImg.current.classList.add(classes.human);
      } else if (number === 2) {
        backImg.current.classList.add(classes.balloons);
      } else {
        backImg.current.classList.add(classes.friends);
      }
    }
  });

  return (
    <div className={classes.root} ref={backImg}>
      <div className={classes.shadow}>
      </div>
    </div>
  );
};

export default BackgroundImage;
