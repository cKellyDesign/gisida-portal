import React from 'react';
import ReactDOM from 'react-dom';
import AppPortal from './AppPortal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppPortal />, div);
  ReactDOM.unmountComponentAtNode(div);
});
