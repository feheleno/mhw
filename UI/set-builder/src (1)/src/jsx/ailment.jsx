import React from 'react';
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
                            <p key={ailment.ailment_id}>
                                {ailment.ailment_name}
                            </p>
                        </React.Fragment>
                )
        )
    }
}

export default Ailment;
