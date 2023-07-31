import React from 'react';
import {Route, Routes } from 'react-router-dom';
import LoginPage from './container/Login/LoginPage';
import HomePage from './container/Home/HomePage';
import Dashboard from './container/Home/Dashboard/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LoginPage />}> </Route>
        <Route path='/home' element={<HomePage />}> </Route>
        <Route path='/dashboard' element={<Dashboard />}> </Route>
      </Routes>
    </div>
  );
}

export default App;
