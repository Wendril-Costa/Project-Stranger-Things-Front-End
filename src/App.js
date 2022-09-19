import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const { UNDER_DEVELOPMENT } = process.env;

function App() {
  return (
    <div className="App">
      {UNDER_DEVELOPMENT === 'true' && <h2>Em desenvolvimento</h2>}
      <StrangerThings />
    </div>
  );
}

export default App;
