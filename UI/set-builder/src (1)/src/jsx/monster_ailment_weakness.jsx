import React from 'react';
import Ailment from './ailment.jsx'
import maws from '../json/monster_ailment_weakness.json'

class MAW extends React.Component {
    render(){
        const monster_ailments = maws.filter(maw=> maw.monster_id === this.props.monster_id)

        return monster_ailments.map( ailment =>
            <React.Fragment>
                    <Ailment ail={ailment.ailment_id} />
                    <p>{ailment.weakness_level}</p>
            </React.Fragment>
        )
    }
}

export default MAW;
