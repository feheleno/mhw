import React from 'react';
import PropTypes from 'prop-types';

import Location from './location.jsx'
import mls from '../json/monster_location.json'

class ML extends React.Component {
    render(){
const { classes } = this.props;
        const monster_locations = mls.filter(ml=> ml.monster_id === this.props.monster_id)
        //return <p>{this.props.monster_id}</p>
            return JSON.stringify(monster_locations)

        // return monster_locations.map( location =>
        //     <React.Fragment>
        //             <p>{this.props.mosnter_id}</p>
        //             <Location loc={location.location_id} />
        //     </React.Fragment>
        // )
    }
}

ML.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default ML;
