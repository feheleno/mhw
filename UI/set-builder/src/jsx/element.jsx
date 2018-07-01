import React from 'react';
import elements from '../json/element.json'

class Element extends React.Component {
  render() {
    if (this.props.origin === 'monster') {
      return(
        elements
                .filter(element => element.element_id === this.props.elem)
                .map(element =>
                  <React.Fragment>
                    <tr>
                      <td key={element.element_id}>
                        Element: {element.element_name}
                      </td>
                    </tr>
                  </React.Fragment>)
      )
    }
    if (this.props.origin === 'mew') {
      return(
        elements
                .filter(element => element.element_id === this.props.elem)
                .map(element => <React.Fragment>
                                  <td key={element.element_id}>
                                    {element.element_name}
                                  </td>
                                </React.Fragment>
                    )
      )
    }
  }
}

export default Element;
