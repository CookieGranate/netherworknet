import { useState } from 'react'
const { BrowserRouter, Routes, Route } = require('react-router-dom')
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>

        <Route path='/' element={<ELEMENT_HIER_REIN_DU_KEK />} />

      </Routes>
  )
}

export default App
