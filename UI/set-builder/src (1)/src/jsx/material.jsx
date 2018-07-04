import React from 'react';
import materials from '../json/material.json'

class Material extends React.Component {
    render(){
        return materials
            .filter(
                material => material.material_id === this.props.mat
            )
            .map(
                material =>
                  <React.Fragment>
                          <p key={material.material_id}>
                              Material: {material.material_name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              Rarity: {material.material_rarity}
                          </p>
                  </React.Fragment>
            )
    }
}

export default Material;
