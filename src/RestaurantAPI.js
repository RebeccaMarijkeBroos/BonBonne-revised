//jshint esversion:6
import React, {Component} from 'react';
import CardSmall from "./components/cardList.js";
//Import JSON file here
import data from './db.json';

//The main component containing a mapping function that creates a CardSmall component for each entry in the db.json file

class RestaurantAPI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data
    };

  }



  //Function that resets the printed content to it's original state
  reset=()=>{
    this.setState((prevState, props) => ({
      restaurants: data
    }));
  }

  //OnClick function that sorts the original data
  sort=()=>{
    this.reset();

    var sortedArray = [];

    

  }

  //OnClick function that returns 6 random restaurants from the original data file
  wildCards=()=>{
    //To prevent multiple random functions from stacking on top of each other, a reset is done
    this.reset();

    var randomArray = [];

    for (var i = 5; i > 0 ; i--){
      var random = Math.floor((Math.random() * (data.length)) + 1);
      randomArray.push(data[random]);
    }

    this.setState((prevState, props) => ({
      restaurants: randomArray
    }));


  }

  //Function that takes the array and converts it to divs
  printContent() {
    var printedArray = [];

    this.state.restaurants.map((source) => {
    printedArray.push(<CardSmall source={source} key={source.id}/>)
    })

    return (printedArray);
  }

  render() {
    return (
      <div className = "RestaurantAPI">
        <div>
          <button onClick={this.wildCards}>Show suggestions</button>
          <button onClick={this.reset}>Reset</button>
          {this.printContent()}
        </div>
      </div>
    );
  }
}

export default RestaurantAPI;
