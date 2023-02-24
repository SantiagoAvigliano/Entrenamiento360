import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import Register from './pages/Register';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path='/'
            element={<Home />}
          />   
          <Route 
            path='/registro'
            element={<Register />}  
            />
          </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
