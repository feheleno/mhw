import React from 'react';
import Element from './element.jsx'
import mews from '../json/monster_element_weakness.json'

class MEW extends React.Component {
    render(){
        const monster_elements = mews.filter(mew=> mew.monster_id === this.props.monster_id)

        return monster_elements.map( element =>
            <React.Fragment>
                <tr>
                    <Element
                        origin='mew'
                        ele={element.element_id}
                    />
                    <td>{element.weakness_level}</td>
                </tr>
            </React.Fragment>
        )
    }
}

export default MEW;
