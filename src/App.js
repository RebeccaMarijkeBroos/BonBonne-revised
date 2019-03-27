import React, { Component } from 'react';
import './App.css';
import CardSmall from "./components/cardList.js";
import data from './db.json';

//The main component containing a mapping function that creates a CardSmall component for each entry in the db.json file

class App extends Component {

  render() {
    return (
      <div className = "App">
        <div>
          {
            data.map((source) => {
            return <CardSmall source={source} key={source.id}/>
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
