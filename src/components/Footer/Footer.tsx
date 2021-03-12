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
      marginTop: 50,
      alignItems: 'center',
    },
    gitHubs: {
      justifyContent: 'space-around',
    }
  })
);

const Footer = () => {
  const classes = useStyles();

  return (
      <Grid container className={classes.root}>
        <Grid item xs>
          <a href="https://rs.school/js/" target="_blank">
            <img width="100px" height="80px" src="https://rs.school/images/rs_school_js.svg" alt="rsSchool"/>
          </a>
        </Grid>
        <Grid item container xs className={classes.gitHubs}>
          <Grid item>
            <Tooltip title="Daniil's Git">
              <IconButton>
                <a href="https://github.com/DANSitNikov" target="_blank">
                  <GitHubIcon color="error"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Daniil's Git">
              <IconButton>
                <a href="https://github.com/DANSitNikov" target="_blank">
                  <GitHubIcon color="action"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Daniil's Git">
              <IconButton>
                <a href="https://github.com/DANSitNikov" target="_blank">
                  <GitHubIcon color="primary"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
          <Grid item>
            <Tooltip title="Daniil's Git">
              <IconButton>
                <a href="https://github.com/DANSitNikov" target="_blank">
                  <GitHubIcon color="secondary"/>
                </a>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs>
          <p>2021</p>
        </Grid>
      </Grid>
  );
}

export default Footer;
