import React from 'react';
import Material from './material.jsx'
import mms from '../json/monster_material.json'

class MM extends React.Component {
    render(){
        const monster_materials = mms.filter(mm=> mm.monster_id === this.props.monster_id)

        return monster_materials.map( material =>
            <React.Fragment>
                    <Material mat={material.material_id} />
            </React.Fragment>
        )
    }
}

export default MM;
