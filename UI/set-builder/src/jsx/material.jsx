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
                      <tr>
                          <td key={material.material_id}>
                              Material: {material.material_name}
                          </td>
                          <td key={material.material_id}>
                              Rarity: {material.material_rarity}
                          </td>
                      </tr>
                  </React.Fragment>
            )
    }
}

export default Material;
