import React from 'react';
import PropTypes from 'prop-types';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Element from './element.jsx'
import Species from './species.jsx'
import ML from './monster_location.jsx'
import diablos from '../images/MHW-Diablos_Render_001.png'

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

class Monster extends React.Component {
  render() {
const { classes } = this.props;
    return (<React.Fragment>
        <CardHeader title={this.props.monster_name} />
        <CardMedia title="Contemplative Reptile">
            <img src={diablos} style={{width:"100%"}}/>
        </CardMedia>
        <CardContent>

            <Element
              origin='monster'
              elem={this.props.element}
            />
            <Species
              spec={this.props.species}
            />
            <ML
              monster_id={this.props.monster_id}
            />
        </CardContent>
    </React.Fragment>)
  }
}

Monster.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Monster);
