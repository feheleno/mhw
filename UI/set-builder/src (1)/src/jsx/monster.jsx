import React from 'react';
import Element from './element.jsx'
import Species from './species.jsx'

class Monster extends React.Component {
  render() {
    return (<React.Fragment>
        <p key={this.props.monster_id}>
          Name: {this.props.monster_name}
        </p>
        <Element
          origin='monster'
          elem={this.props.element}
        />
        <Species
          spec={this.props.species}
        />
    </React.Fragment>)
  }
}

export default Monster;
