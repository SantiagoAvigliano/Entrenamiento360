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
import Login from './pages/Login';
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
            path='/formulario'
            element={<DataForm />}  
            />
            <Route
            path='/agenda'
            element={<Booking />}
            />
            <Route
            path='/login'
            element={<Login />}
            />
            <Route
            path='/register'
            element={<Register />}
            />
          </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
