import React, { Component } from 'react';
import ContactCard from './components/ContactCard';
import EquipmentCard from './components/EquipmentCard';
import './App.css';

import avatar from './img/luna_avatar.png';
import testStaffers from './test-staffers.json';
import testEquipment from './test-equipment.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="col s3">
          {
            testStaffers.map((staffer, index) => {
              let props = {...staffer};
              props.avatar = avatar;
              return (
                <div key={index}>
                  <ContactCard {...props} />
                </div>
              );
            })
          }
          </div>
          {
            testEquipment.map((equipment, index) => {
              return (
                <div className="col s2 equipment-card" key={index}>
                  <EquipmentCard {...equipment} />
                </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
