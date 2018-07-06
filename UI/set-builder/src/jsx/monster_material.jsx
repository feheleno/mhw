import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import Material from './material.jsx'
import mms from '../json/monster_material.json'

class MM extends React.Component {
    render(){
        const monster_materials = mms.filter(mm=> mm.monster_id === this.props.monster_id)

        return monster_materials.map( material =>
            <React.Fragment>
                <TableRow>
                    <Material mat={material.material_id} />
                </TableRow>
            </React.Fragment>
        )
    }
}

export default MM;
