//jshint esversion:6
import React from 'react';
import Modal from 'react-responsive-modal';
import './card.css';

//Local placeholder for this.state.source.photo
import tempImage from './restaurant.jpeg';

//To display the details of the restaurant I'm using the NPM react-responsive-modal.
//Documentation and instructions can be found here:
export default class CardModal extends React.Component {
    state = {
      open: false,
      source: this.props.source
    };

    onOpenModal = () => {
      this.setState({
        open: true
      });
    };

    onCloseModal = () => {
      this.setState({
        open: false
      });
    };

      render() {
        const {
          open
        } = this.state;
        const modalStyles = {
          modal: {
            height: '500px',
            width: '310px',
            borderRadius: '3px',
            boxShadow: '0px 0px 5px 3px #353535',
            padding: '0'
          }
        };

        return (
          <div>
          <button className = 'infoButton' onClick = {this.onOpenModal} > INFO < /button>
          <Modal open={open} onClose={this.onCloseModal} showCloseIcon={false} styles={modalStyles}center >
            <div className = 'modalContent'>
              <h2 className = 'modalHeader'>{this.state.source.name} </h2>
              <img className = 'modalImage' alt='tempImage' src={tempImage}/>
              <div className = 'modalText'>
              <div className = 'openingHours'>
                {this.state.source.opening_hours[0]} <br/>
                {this.state.source.opening_hours[1]} <br/>
                {this.state.source.opening_hours[2]} <br/>
                {this.state.source.opening_hours[3]} <br/>
                {this.state.source.opening_hours[4]} <br/>
                {this.state.source.opening_hours[5]} <br/>
                {this.state.source.opening_hours[6]} <br/>
                {this.state.source.opening_hours[7]}
              </div>
              <div className='info'>
                <p className='cardBigH2'>Rating: {this.state.source.rating}</p>
                <p className='cardBigH2'>Price - range: {this.props.priceRange}</p>
                <p className='cardBigH3'>{this.props.newAddress[0]} <br/> {this.props.newAddress[1]}</p>
                <br/>
                <br/>
                <a className='cardBigH3' href={this.state.source.website}>To website </a>
                <p className='cardBigH3'>{this.state.source.phone_number}</p>
              </div>
            </div>
              <button open={open} className='closeButton' onClick={this.onCloseModal}>CLOSE</button>
          </div> <
          /Modal > <
          /div>
        );
      }
    }
