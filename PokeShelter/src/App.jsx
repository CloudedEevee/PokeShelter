import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div className='App'>
      <BrowserRouter>
          <Routes>

            <Route element={<Main />} path="/" default />

          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
