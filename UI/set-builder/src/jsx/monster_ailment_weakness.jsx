import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import Ailment from './ailment.jsx';
import maws from '../json/monster_ailment_weakness.json';

class MAW extends React.Component {
    render(){
        const monster_ailments = maws.filter(maw=> maw.monster_id === this.props.monster_id)

        return monster_ailments.map( ailment =>
            <React.Fragment>
                    <TableRow>
                        <Ailment ail={ailment.ailment_id} />
                        <TableCell>
                            <Typography variant='subheading'>{ailment.weakness_level}</Typography>
                        </TableCell>
                    </TableRow>
            </React.Fragment>
        )
    }
}

export default MAW;
