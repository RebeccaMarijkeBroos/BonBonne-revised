//jshint esversion:6
import React, { Component } from 'react';
import CardModal from './cardModal.js';
import './card.css';


//Pixabay doesn't allow hotlinking. So I'm using a local placeholder image instead
//Ideally the photo would be accessible with the dot notation: this.state.target.photo
import tempImage from './restaurant.jpeg';

// The small card component that gets rendered in a list form
class CardSmall extends Component {
  constructor(props){
    super(props);
    this.state = {
      target: this.props.source,
      SplittedAdress:[],
      priceRange:''
    };
  }

//Along with render of the component the price and adress are calculated and stored
  componentDidMount() {
    var priceLevel = this.priceCheck(this.state.target.price_level);
    this.setState({priceRange: priceLevel});

    var splitted = this.splitAdress(this.state.target.address);
    this.setState({SplittedAdress: splitted});
  }

//function that converts the numeral price-range to text values or displays N.A. if no price range was indicated
  priceCheck = (price) => {
    var priceLevel = '';

    switch (price) {
      case 1:
      priceLevel ='Low'
      break;

      case 2:
      priceLevel ='Average'
      break;

      case 3:
      priceLevel ='High'
      break;

      default:
      priceLevel ='N.A.'
    }

    return(priceLevel);
  }

  //For aesthetic purposes the address string is split up into two parts:
  //Streetname and housenumber (splitted[0])
  //Postcode and city (splitted[1])
  splitAdress = (address) => {
    var splitted = address.split(',');
    return (splitted)
  }

  //JSON object from which this component is created gets passed through it's own modal/detailpage
  //Button to open the modal is included in the CardModal component
  render() {
    return (

      <div className='cardSmall'>

        <div className='cardSmallImage'><img className='thumbnail' alt='tempImage' src = { tempImage }/></div>

        <div className='cardSmallText'>
          <div className='cardSmallHeader'><h2>{ this.state.target.name }</h2></div>
          <div className='cardSmallPar'>
            <p className='cardSmallH3'>Rating: {this.state.target.rating}</p>
            <p className='cardSmallH3'>Price-range: {this.state.priceRange}</p>
            <p className='cardSmallH3'>{this.state.SplittedAdress[0]}<br />{this.state.SplittedAdress[1]}</p>
            <a className='cardSmallH4' href={this.state.target.website}>To website</a>
            <p className='cardSmallH4'>{this.state.target.phone_number}</p>
          </div>

          <CardModal source={this.state.target} newAddress={this.state.SplittedAdress} priceRange={this.state.priceRange}/>
        </div>
      </div>
    )
  }
}

export default CardSmall;
