import React from 'react';
import elements from '../json/element.json'

class Element extends React.Component {
    render(){
        return elements
            .filter(
                element => element.element_id === this.props.elem
            )
            .map(
                element => <p key={element.element_id}>Element: {element.element_name}</p>
            )
    }
}

export default Element;
