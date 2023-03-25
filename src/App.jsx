import { useState } from 'react'
const { BrowserRouter, Routes, Route } = require('react-router-dom')
import './App.css'
// pages
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
      <Routes>

        <Route path='/' element={<Home />} />

      </Routes>
  )
}

export default App
