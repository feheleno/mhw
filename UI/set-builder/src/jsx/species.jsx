import React from 'react';
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
                      <tr>
                          <td key={species.species_id}>
                              Species: {species.species_name}
                          </td>
                      </tr>
                  </React.Fragment>
            )
    }
}

export default Species;
