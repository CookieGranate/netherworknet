import { Route, Routes } from 'react-router-dom'
// pages
import Home from './pages/Home'
import Discord from './pages/Discord'
// components
import Navbar from './components/Navbar'

import CookiesConsent from './components/cookiesConsent/CookiesConsent'

function App() {

  return (
    <main>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/discord' element={<Discord />} />

          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      <CookiesConsent />
      {/* <Footer /> */}
    </main>
  )
}

export default App
