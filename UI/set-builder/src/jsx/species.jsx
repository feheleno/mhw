import React from 'react';
import Typography from '@material-ui/core/Typography';

import species from '../json/species.json'

class Species extends React.Component {
    render(){
        return species
            .filter(
                species => species.species_id === this.props.spec
            )
            .map(
                species =>
                  <React.Fragment>
                    <Typography key={species.species_id} variant='subheading'>
                          Species: {species.species_name}
                    </Typography>
                  </React.Fragment>
            )
    }
}

export default Species;
