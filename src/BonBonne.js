//jshint esversion:6
import React, {Component} from 'react';
import CardSmall from "./components/cardList.js";
//Import JSON file here
import data from './db.json';

//The main component containing a mapping function that creates a CardSmall component for each entry in the db.json file
class BonBonne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: data
    };
  }

  //OnChange function that filters the data based on values in a dropdown menu
  filterData=(event)=>{
    var filteredArray = data;
    if (event.target.value == 'rating'){
      filteredArray = filteredArray.filter(item => item.rating >= 4);
    }else if (event.target.value == 'price'){
      filteredArray = filteredArray.filter(item => item.price_level == 1);
    }else {
      this.reset();
    }
    //Changes state to the filteredArray
    this.setState((prevState, props) => ({
      restaurants: filteredArray
    }));
  }

  //Function that resets the printed content to it's original state
  reset=()=>{
    this.setState((prevState, props) => ({
      restaurants: data
    }));
  }

  //OnChange function that sorts the original data
  sort=(event)=>{
    var sortedArray = data;
    //Sorting algorithm
    const propComparator = (propName) =>
    (a, b) => a[propName] == b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1
    //Checks the value input and runs the sorting adressing the right object value
    if (event.target.value == 'name'){
      sortedArray = sortedArray.sort(propComparator('name'));
    } else if (event.target.value == 'rating') {
      sortedArray = sortedArray.sort(propComparator('rating'));
    } else {
      this.reset();
    }
    //Changes state to the sortedArray
    this.setState((prevState, props) => ({
      restaurants: sortedArray
    }));
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
        <header>
          <h1 className='logo'>Bon Bonne</h1>
          <div className='tools'>
            <div>
              Sort by: &nbsp;
              <select value={this.state.value} onChange={this.sort}>
                <option value="">---</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div>
              Filter on: &nbsp;
              <select value={this.state.value} onChange={this.filterData}>
                <option value="">---</option>
                <option value="rating">rating of 4 or higher</option>
                <option value="price">Bargains</option>
              </select>
            </div>
            <button className='toolButton' onClick={this.wildCards}>I can't decide!</button>
            <button className='toolButton' onClick={this.reset}>Reset</button>
          </div>
        </header>
          {this.printContent()}
          <footer>
            Bon Bonne API by Rebecca Marijke Broos
          </footer>
        </div>
    );
  }
}

export default BonBonne;
