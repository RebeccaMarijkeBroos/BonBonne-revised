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
    if (event.target.value === 'rating'){
      filteredArray = filteredArray.filter(item => item.rating >= 4);
    }else if (event.target.value === 'price'){
      filteredArray = filteredArray.filter(item => item.price_level === 1);
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
    console.log(data);
    this.setState((prevState, props) => ({
      restaurants: data
    }));
  }

  //OnChange function that sorts the original data
  sortData=(event)=>{
    var sortedArray = [].concat(data);

    //Checks which option in de dropdown menu was selected and runs the according algorithm
    if (event.target.value === 'name'){
      sortedArray = sortedArray.sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1);
    } else if (event.target.value === 'rating') {
      sortedArray = sortedArray.sort((a, b) => a.rating === b.rating ? 0 : a.rating > b.rating ? -1 : 1);
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
    var usedNumbers = [];
    var randomNumber = 0;
    while (randomArray.length < 6){
      randomNumber = Math.floor((Math.random() * (data.length)));
      //Check if the random number has already been used
      if (usedNumbers.includes(randomNumber)){
        randomNumber = Math.floor((Math.random() * (data.length)));
      }
      else{
        randomArray.push(data[randomNumber]);
        usedNumbers.push(randomNumber);
      }
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
            <div className=' extraSpace'>
              Sort by: &nbsp;
              <select value={this.state.value} onChange={this.sortData}>
                <option value="">---</option>
                <option value="name">Name</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className=' extraSpace'>
              Filter on: &nbsp;
              <select value={this.state.value} onChange={this.filterData}>
                <option value="">---</option>
                <option value="rating">rating of 4 or higher</option>
                <option value="price">Bargains</option>
              </select>
            </div>
            <button className='toolButton extraSpace' onClick={this.wildCards}>Random</button>
            <button className='toolButton extraSpace' onClick={this.reset}>Reset</button>
          </div>
        </header>
        <div className='cardRegion'>
          {this.printContent()}
        </div>
          <footer>
            Bon Bonne API by Rebecca Marijke Broos
          </footer>
        </div>
    );
  }
}

export default BonBonne;
