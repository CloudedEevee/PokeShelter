import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import DetailPage from './components/DetailPage';

function App() {

  const [pokemonCard, setPokemonCard] = useState([])


  return (
    <>
      <div className='App'>
      <BrowserRouter>
          <Routes>

            <Route element={<Main />} path="/" default />
            <Route element={<DetailPage />} path="/" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
