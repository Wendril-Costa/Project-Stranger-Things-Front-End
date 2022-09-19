import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const { REACT_APP_UNDER_DEVELOPMENT } = process.env;

function App() {
  return (
    <div className="App">
      <h2>{ REACT_APP_UNDER_DEVELOPMENT === 'true' && <h2>Em desenvolvimento</h2> }</h2>
      <StrangerThings />
    </div>
  );
}

export default App;
