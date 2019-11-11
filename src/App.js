import React from 'react';
import Generate from './Generate';
import Show from './Show';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

function App() {  
  return (
    <BrowserRouter>
    <div className="App">
    <Route exact path='/' component={Generate} />
    <Route  path='/Show' component={Show} />
    </div>
    </BrowserRouter>
  );
}

export default App;
