import React from 'react';
import Ailment from './ailment.jsx'
import maws from '../json/monster_ailment_weakness.json'

class MAW extends React.Component {
    render(){
        const monster_ailments = maws.filter(maw=> maw.monster_id === this.props.monster_id)

        return monster_ailments.map( ailment =>
            <React.Fragment>
                <tr>
                    <Ailment ail={ailment.ailment_id} />
                    <td>{ailment.weakness_level}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default MAW;
