import React from 'react';
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
                          <p key={location.location_id}>
                              Location: {location.location_name}
                          </p>
                  </React.Fragment>
            )
    }
}

export default Location;
