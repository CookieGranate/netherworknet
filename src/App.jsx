import { Route, Routes } from 'react-router-dom'
// pages
import Home from './pages/Home'
// components
import Navbar from './components/Navbar'

function App() {

  return (
    <main>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      {/* <Footer /> */}
    </main>
  )
}

export default App
