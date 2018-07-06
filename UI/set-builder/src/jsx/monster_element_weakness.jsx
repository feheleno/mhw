import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import Element from './element.jsx'
import mews from '../json/monster_element_weakness.json'

class MEW extends React.Component {
    render(){
        const monster_elements = mews.filter(mew=> mew.monster_id === this.props.monster_id)

        return monster_elements.map( element =>
            <React.Fragment>
                    <TableRow>
                        <Element
                            origin='mew'
                            elem={element.element_id}
                        />
                        <TableCell>
                            <Typography variant='subheading'>{element.weakness_level}</Typography>
                        </TableCell>
                    </TableRow>
            </React.Fragment>
        )
    }
}

export default MEW;
