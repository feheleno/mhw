import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

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
                        <TableCell>
                            <Typography key={material.material_id} variant='subheading'>
                                {material.material_name}
                            </Typography>
                        </TableCell>
                        <TableCell>
                            <Typography key={material.material_id} variant='subheading'>
                                {material.material_rarity}
                            </Typography>
                        </TableCell>
                  </React.Fragment>
            )
    }
}

export default Material;
