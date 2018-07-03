import React, {Component} from 'react';
import './App.css';

import Monster from './jsx/monster.jsx'
import ML from './jsx/monster_location.jsx'
import MM from './jsx/monster_material.jsx'
import MAW from './jsx/monster_ailment_weakness.jsx'
import MEW from './jsx/monster_element_weakness.jsx'
import MBP from './jsx/monster_breakable_part.jsx'

import monster from './json/monster.json'

const tableStyle = {
  marginLeft: 900
}

class App extends Component {


  render() {

    return (<div className="App">
      <h2>
        Monster Description
      </h2>
      <h3>
        <table style={tableStyle}>
          <Monster
            monster_id={monster[6].monster_id.toString()}
            monster_name={monster[6].monster_name}
            element={monster[6].element}
            species={monster[6].species}
          />
          <ML
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Ailment Weakness
      </h2>
      <h3>
        <table style={tableStyle}>
          <MAW
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Element Weakness
      </h2>
      <h3>
        <table style={tableStyle}>
          <MEW
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Breakable Parts
      </h2>
      <h3>
        <table style={tableStyle}>
          <MBP
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
      <h2>
        Monster Materials
      </h2>
      <h3>
        <table style={tableStyle}>
          <MM
            monster_id={monster[6].monster_id}
          />
        </table>
      </h3>
    </div>);
  }
}

export default App;
//{JSON.stringify(monster[0])}
