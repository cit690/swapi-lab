import Starships from './pages/Starships/Starships';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import { Route, Routes } from 'react-router-dom'
import { useState } from 'react';

function App() {
 

  return (
  <>
  <NavBar />
  <Routes>
    <Route path='/' element={<Starships />} />
    <Route path='/starship' element={<StarshipPage />} />
  </Routes>
  </>
  );
}

export default App;
