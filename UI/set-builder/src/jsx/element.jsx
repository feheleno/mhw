import React from 'react';
import elements from '../json/element.json'

class Element extends React.Component {
  render() {
    if (this.props.origin === 'monster') {
      return elements
        .filter(
          element => element.element_id === this.props.elem
        )
        .map(
          element => <p key={element.element_id}>Element: {element.element_name}</p>
        )
    }
    if (this.props.origin === 'mew') {
      return elements
      .filter(
        element => element.element_id === this.props.ele
      )
      .map(
        element => <React.Fragment>
                      <td key={element.element_id}>
                        {element.element_name}
                      </td>
                    </React.Fragment>
      )
    }
  }
}

export default Element;
