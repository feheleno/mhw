import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

import body_parts from '../json/body_part.json'

class BodyPart extends React.Component {
    render(){
        return(
            body_parts
                .filter(
                    body_part => body_part.body_part_id === this.props.bp
                )
                .map(
                    body_part =>
                        <React.Fragment>
                            <TableCell>
                                <Typography key={body_part.body_part_id} variant='subheading'>
                                    {body_part.body_part_name}
                                </Typography>
                            </TableCell>
                        </React.Fragment>
                )
        )
    }
}

export default BodyPart;
