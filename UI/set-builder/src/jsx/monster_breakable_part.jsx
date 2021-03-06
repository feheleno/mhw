import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import BodyPart from './body_part.jsx'
import mbps from '../json/monster_breakable_part.json'

class MBP extends React.Component {
    render(){
        const monster_breakable_parts = mbps.filter(mbp=> mbp.monster_id === this.props.monster_id)

        return monster_breakable_parts.filter( monster_breakable_part => (monster_breakable_part.sever_level !== 0 && monster_breakable_part.blunt_level !== 0 && monster_breakable_part.ammo_level !== 0 )).map( monster_breakable_part =>
            <React.Fragment>
                    <TableRow>
                        <BodyPart bp={monster_breakable_part.body_part_id} />
                        <TableCell><Typography variant='subheading'>{monster_breakable_part.sever_level}</Typography></TableCell>
                        <TableCell><Typography variant='subheading'>{monster_breakable_part.blunt_level}</Typography></TableCell>
                        <TableCell><Typography variant='subheading'>{monster_breakable_part.ammo_level}</Typography></TableCell>
                    </TableRow>
            </React.Fragment>
        )
    }
}

export default MBP;
