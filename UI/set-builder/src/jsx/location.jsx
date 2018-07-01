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
                      <tr>
                          <td key={location.location_id}>
                              Location: {location.location_name}
                          </td>
                      </tr>
                  </React.Fragment>
            )
    }
}

export default Location;
