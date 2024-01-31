import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/views/Main';
import DetailPage from './components/views/DetailPage';

function App() {

  const [pokeParty, setPokeParty] = useState([]);
  const [pokemonCard, setPokemonCard] = useState({});
  const [btnAction, setBtnAction] = useState("");

  return (
    <>
      <div className='App'>
      <BrowserRouter>
          <Routes>

            <Route 
              element={
              <Main 
                pokemonCard={pokemonCard}
                setPokemonCard={setPokemonCard}
                btnAction={btnAction}
                setBtnAction={setBtnAction}
                pokeParty={pokeParty}
                setPokeParty={setPokeParty}
              />} 
              path="/" 
              default />
            <Route element={<Main/>} path="/pokemon/update/:id"/>
            <Route element={<Main/>} path="/pokemon/delete/:id"/>
            <Route element={<DetailPage />} path="/pokemon/details/:id" />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
