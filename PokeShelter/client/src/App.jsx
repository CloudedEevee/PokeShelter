import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/views/Main';
import DetailPage from './components/views/DetailPage';

function App() {

  const [pokemonCard, setPokemonCard] = useState([])
  const [btnAction, setBtnAction] = useState("")
  const [onSubProp, setOnSubProp] = useState("")

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
                onSubProp={onSubProp}
                setOnSubProp={setOnSubProp}
              />} 
              path="/" 
              default />
            <Route element={<DetailPage />} path="/pokemon/details/:id" />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
