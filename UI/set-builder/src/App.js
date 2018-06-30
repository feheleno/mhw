import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Monster from './jsx/monster.jsx'
import MAW from './jsx/monster_ailment_weakness.jsx'

import monster from './json/monster.json'
//import species from './json/species.json'
//import element from './json/element.json'
//import ailment from './json/ailment.json'
//import monster_ailment_weakness from './json/monster_ailment_weakness.json'
import body_part from './json/body_part.json'
import location from './json/location.json'
import material from './json/material.json'
import monster_breakable_part from './json/monster_breakable_part.json'
import monster_element_weakness from './json/monster_element_weakness.json'
import monster_location from './json/monster_location.json'

class App extends Component {

  render() {

    return (
      <div className="App">
        <h2>
            Monster Description
        </h2>
        <h3>
            <Monster
                monster_id={monster[0].monster_id.toString()}
                monster_name={monster[0].monster_name}
                element={monster[0].element}
                species={monster[0].species}
            />
        </h3>
        <h2>
            Ailment Weakness
        </h2>
        <h3>
            <table>
                <MAW
                    monster_id={monster[0].monster_id}
                />
            </table>
        </h3>
      </div>
    );
  }
}

export default App;
//{JSON.stringify(monster[0])}
