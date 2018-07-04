import React, {Component} from 'react';
import './App.css';

import Monster from './jsx/monster.jsx'
import ML from './jsx/monster_location.jsx'
import MM from './jsx/monster_material.jsx'
import MAW from './jsx/monster_ailment_weakness.jsx'
import MEW from './jsx/monster_element_weakness.jsx'
import MBP from './jsx/monster_breakable_part.jsx'

import monster from './json/monster.json'

import diablos from './images/MHW-Diablos_Render_001.png'

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Image from 'material-ui-image'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { createMuiTheme } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
    // media: {
    //     height: 0,
    //     paddingTop: '56.25%', // 16:9
    //   },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#a98274',
      main: '#795548',
      dark: '#4b2c20',
      contrastText: '#fff',
    },
    secondary: {
      light: '#f05545',
      main: '#b71c1c',
      dark: '#7f0000',
      contrastText: '#fff',
    },
  },
});

class App extends React.Component {
state = {
    spacing: '16',
  };
  render() {
const { classes } = this.props;
    const { spacing } = this.state;
    return (
    <CssBaseline>
        <Grid container className={classes.root}>
            <Grid item md={12}>
                <Paper className={classes.paper}>
                    <Grid container>
                        <Grid item md={8}>
                            <Paper className={classes.paper}>
                                <Grid container spacing={8}>
                                    <Grid item md={4}>
                                        <Paper className={classes.paper}>
                                            <p>Ailment Weakness</p>
                                            <MAW
                                              monster_id={monster[6].monster_id}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Paper className={classes.paper}>
                                            <p>Element Weakness</p>
                                            <MEW
                                              monster_id={monster[6].monster_id}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item md={4}>
                                        <Paper className={classes.paper}>
                                            <p>Breakable Parts</p>
                                            <MBP
                                              monster_id={monster[6].monster_id}
                                            />
                                        </Paper>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Paper className={classes.paper}>
                                            Monster Materials
                                            <MM
                                                monster_id={monster[6].monster_id}
                                            />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={classes.paper}>
                                <Grid container direction={'column'} spacing={8}>
                                    <Grid item md={12}>
                                        <Paper className={classes.paper}>
                                            <img src={diablos} style={{width:"100%"}}/>
                                        </Paper>
                                    </Grid>
                                    <Grid item md={12}>
                                        <Paper className={classes.paper}>
                                            <Monster
                                              monster_id={monster[6].monster_id.toString()}
                                              monster_name={monster[6].monster_name}
                                              element={monster[6].element}
                                              species={monster[6].species}
                                            />
                                        <ML
                                          monster_id={monster[6].monster_id}
                                        />
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
      {/*<h2>
        Monster Description
      </h2>
      <h3>
        <table>
          <Monster
            monster_id={monster[6].monster_id.toString()}
            monster_name={monster[6].monster_name}
            element={monster[6].element}
            species={monster[6].species}
          />
          <ML
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Ailment Weakness
      </h2>
      <h3>
        <table>
          <MAW
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Element Weakness
      </h2>
      <h3>
        <table>
          <MEW
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Breakable Parts
      </h2>
      <h3>
        <table>
          <MBP
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Monster Materials
      </h2>
      <h3>
        <table>
          <MM
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>*/}
    </CssBaseline>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
//{JSON.stringify(monster[0])}
