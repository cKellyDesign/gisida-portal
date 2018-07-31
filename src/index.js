import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import AppPortal from './AppPortal';

ReactDOM.render(<AppPortal />, document.getElementById('root'));
registerServiceWorker();
