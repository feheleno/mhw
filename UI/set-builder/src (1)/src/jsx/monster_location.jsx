import React from 'react';
import Location from './location.jsx'
import mls from '../json/monster_location.json'

class ML extends React.Component {
    render(){
        const monster_locations = mls.filter(ml=> ml.monster_id === this.props.monster_id)

        return monster_locations.map( location =>
            <React.Fragment>
                    <Location loc={location.location_id} />
            </React.Fragment>
        )
    }
}

export default ML;
