import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

import Monster from '../monster.jsx'
import monster from '../../json/monster.json'
import diablos from '../../images/MHW-Diablos_Render_001.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class MonsterBasicInfo extends React.Component {
render(){
const { classes } = this.props;
return (
<React.Fragment>
    <Paper className={classes.paper} style={{backgroundColor: 'rgba(96, 70, 70, 0.7)'}}>
    <Paper className={classes.paper} style={{backgroundColor: 'rgba(176, 133, 133, 0.5)'}}>
        <Grid container direction={'column'} spacing={8}>
            <Grid item md={12}>
                <Card>
                    <Monster
                      monster_id={monster[6].monster_id.toString()}
                      monster_name={monster[6].monster_name}
                      element={monster[6].element}
                      species={monster[6].species}
                    />
                </Card>
            </Grid>
        </Grid>
    </Paper>
    </Paper>
</React.Fragment>
);}
}

MonsterBasicInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MonsterBasicInfo);
