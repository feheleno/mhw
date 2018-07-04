import React from 'react';
import Element from './element.jsx'
import mews from '../json/monster_element_weakness.json'

class MEW extends React.Component {
    render(){
        const monster_elements = mews.filter(mew=> mew.monster_id === this.props.monster_id)

        return monster_elements.map( element =>
            <React.Fragment>
                    <Element
                        origin='mew'
                        elem={element.element_id}
                    />
                    <p>{element.weakness_level}</p>
            </React.Fragment>
        )
    }
}

export default MEW;
