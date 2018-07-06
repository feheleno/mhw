import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import MonsterBasicInfo from './jsx/monster_basic_info.jsx'
import MonsterDetailedInfo from './jsx/monster_detailed_info.jsx'
import leather from './images/leather.jpg'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  container: {
    height: 5 * theme.spacing.unit,
},
  background: {
    backgroundImage: `url(${leather})`,
}
});

class App extends React.Component {
state = {};
  render() {
const { classes } = this.props;
    const { spacing } = this.state;
    return (
    <CssBaseline>
        <Grid container className={classes.root}>
            <Grid item md={12}>
                <Paper className={classes.paper} style={{backgroundImage: `url(${leather})`}}>
                    <Grid container spacing={8}>
                        <Grid item md={8}>
                            <MonsterDetailedInfo />
                        </Grid>
                        <Grid item md={4}>
                            <MonsterBasicInfo />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </CssBaseline>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
//{JSON.stringify(monster[0])}
