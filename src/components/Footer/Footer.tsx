import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {createStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      textAlign: 'center',
      alignItems: 'center',
      position: 'fixed',
      padding: '10px 0',
      bottom: 0,
      backgroundColor: 'rgba(255,255,255,0.8)',
    },
    gitHubs: {
      justifyContent: 'space-around',
    },
    iconButton: {
      padding: 0,
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
      <Grid container className={classes.root}>
        <Grid item xs={3} sm={4}>
          <a href="https://rs.school/js/" target="_blank">
            <img width="70px" height="40px" src="https://rs.school/images/rs_school_js.svg" alt="rsSchool"/>
          </a>
        </Grid>
        <Grid item container xs={6} sm={5} className={classes.gitHubs}>
          <Grid item>
            <Tooltip title="Stanislav">
              <IconButton className={classes.iconButton}>
                <a href="https://github.com/Demanikys" target="_blank">
                  <GitHubIcon color="error"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Bogdan">
              <IconButton className={classes.iconButton}>
                <a href="https://github.com/Bogdan-101" target="_blank">
                  <GitHubIcon color="action"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Alexei">
              <IconButton className={classes.iconButton}>
                <a href="https://github.com/AlexBibig" target="_blank">
                  <GitHubIcon color="primary"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Daniil">
              <IconButton className={classes.iconButton}>
                <a href="https://github.com/DANSitNikov" target="_blank">
                  <GitHubIcon color="secondary"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs={3} sm={3}>
          <p>2021</p>
        </Grid>
      </Grid>
  );
}

export default Footer;
