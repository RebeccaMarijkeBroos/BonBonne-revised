import React from 'react';
import ReactDOM from 'react-dom';
import BonBonne from './BonBonne';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<BonBonne />, document.getElementById('root'));

serviceWorker.unregister();
