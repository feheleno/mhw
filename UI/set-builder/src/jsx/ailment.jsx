import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import ailments from '../json/ailment.json'

class Ailment extends React.Component {
    render(){
        return(
            ailments
                .filter(
                    ailment => ailment.ailment_id === this.props.ail
                )
                .map(
                    ailment =>
                        <React.Fragment>
                            <TableCell>
                                <Typography key={ailment.ailment_id} variant='subheading'>
                                    {ailment.ailment_name}
                                </Typography>
                            </TableCell>
                        </React.Fragment>
                )
        )
    }
}

export default Ailment;
