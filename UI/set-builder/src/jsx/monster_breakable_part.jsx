import React from 'react';
import BodyPart from './body_part.jsx'
import mbps from '../json/monster_breakable_part.json'

class MBP extends React.Component {
    render(){
        const monster_breakable_parts = mbps.filter(mbp=> mbp.monster_id === this.props.monster_id)

        return monster_breakable_parts.filter( monster_breakable_part => (monster_breakable_part.sever_level !== 0 && monster_breakable_part.blunt_level !== 0 && monster_breakable_part.ammo_level !== 0 )).map( monster_breakable_part =>
            <React.Fragment>
                <tr>
                    <BodyPart bp={monster_breakable_part.body_part_id} />
                    <td>Sever: {monster_breakable_part.sever_level}</td>
                    <td>Blunt: {monster_breakable_part.blunt_level}</td>
                    <td>Ammo: {monster_breakable_part.ammo_level}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default MBP;
