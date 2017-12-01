import React from 'react';
import ReactDOM from 'react-dom';

// AppContainer is an essential wrapper for react HMR
import {AppContainer} from 'react-hot-loader';

import App from './components/App';

let root = document.createElement('div');
root.id = 'root';
document.body.appendChild(root);
const render = (Components) => {
  ReactDOM.render(<AppContainer>
    <Components/>
  </AppContainer>, document.getElementById('root'));
};

render(App);

// HMR API
if (module.hot) {
  module.hot.accept(() => {
    render(App);
  });
}
