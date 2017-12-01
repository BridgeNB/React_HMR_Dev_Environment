import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
    return <p>
      Hello React!</p>;
  }
}

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(<App/>, document.getElementById('app'));
  })
}