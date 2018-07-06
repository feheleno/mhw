import React from 'react';
import Typography from '@material-ui/core/Typography';

import locations from '../json/location.json'

class Location extends React.Component {
    render(){
        return locations
            .filter(
                location => location.location_id === this.props.loc
            )
            .map(
                location =>
                  <React.Fragment>
                    <Typography key={location.location_id} variant='subheading'>
                        Location: {location.location_name}
                    </Typography>
                  </React.Fragment>
            )
    }
}

export default Location;
