import React, { Component } from 'react';
import ContactCard from './components/ContactCard';
import EquipmentCard from './components/EquipmentCard';
import Clock from './components/Clock';
import logo from './img/techops.png';
import './App.css';

import avatar from './img/luna_avatar.png';
import graph from './img/graph.svg';
import testStaffers from './test-staffers.json';
import testEquipment from './test-equipment.json';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="techops-logo" alt="logo" />
          <Clock />
        </div>
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
          <div className="col s9 network-graph">
            <h3>Bandwidth Usage</h3>
            <img src={graph} alt="network-graph" />
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
        <div className="row footer">
          <h1>Remember: TechOps is Best Ops™</h1>
        </div>
      </div>
    );
  }
}

export default App;
