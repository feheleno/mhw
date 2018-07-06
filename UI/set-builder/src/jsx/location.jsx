import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

import locations from '../json/location.json'

class Location extends React.Component {
  render() {
    const {classes} = this.props;
    return locations.filter(location => location.location_id === this.props.loc).map(location =>
      <React.Fragment>
        <Typography key={location.location_id} variant='title'>
          Location: {location.location_name}
        </Typography>
      </React.Fragment>)
  }
}

Location.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Location;
