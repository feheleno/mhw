import React from 'react';
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
                            <td key={body_part.body_part_id}>
                                {body_part.body_part_name}
                            </td>
                        </React.Fragment>
                )
        )
    }
}

export default BodyPart;
