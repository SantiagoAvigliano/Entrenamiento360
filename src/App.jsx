import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import './index.css';

import Home from './pages/Home';
import DataForm from './pages/DataForm';
import Booking from './pages/Booking'

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
            path='/formulario'
            element={<DataForm />}  
            />
            <Route
            path='/agenda'
            element={<Booking />}
            />
          </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
