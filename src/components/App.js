import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Pigs from './Pigs'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < Pigs pigsData={hogs}/>
      </div>
    )
  }
}

export default App;
