import React from "react";
import Grid from "@material-ui/core/Grid";
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import style from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <Grid container className={style.footer}>
      <Grid item xs={3} sm={4}>
        <a href="https://rs.school/js/" target="blank">
          <img width="70px" height="40px" src="https://rs.school/images/rs_school_js.svg" alt="rsSchool" />
        </a>
      </Grid>
      <Grid item container xs={6} sm={5} className={style.gitHubs}>
        <Grid item>
          <Tooltip title="Stanislav">
            <IconButton className={style.iconButton}>
              <a href="https://github.com/Demanikys" target="blank">
                <GitHubIcon color="error" />
              </a>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Bogdan">
            <IconButton className={style.iconButton}>
              <a href="https://github.com/Bogdan-101" target="blank">
                <GitHubIcon style={{ color: 'rebeccapurple' }} />
              </a>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Alexei">
            <IconButton className={style.iconButton}>
              <a href="https://github.com/AlexBibig" target="blank">
                <GitHubIcon color="primary" />
              </a>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <Tooltip title="Daniil">
            <IconButton className={style.iconButton}>
              <a href="https://github.com/DANSitNikov" target="blank">
                <GitHubIcon color="secondary" />
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
