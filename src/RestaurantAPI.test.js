import React from 'react';
import ReactDOM from 'react-dom';
import RestaurantAPI from './RestaurantAPI';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RestaurantAPI />, div);
  ReactDOM.unmountComponentAtNode(div);
});
