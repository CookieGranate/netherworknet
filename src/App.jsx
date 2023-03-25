import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
// pages
import Home from './pages/Home'
// components
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='w-full h-full'>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />

        {/* <Route path='*' element={<NotFound />} /> */}

      </Routes>
    </main>
      
  )
}

export default App