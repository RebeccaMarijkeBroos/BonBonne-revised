import React from 'react';
import ReactDOM from 'react-dom';
import BonBonne from './BonBonne';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BonBonne />, div);
  ReactDOM.unmountComponentAtNode(div);
});
