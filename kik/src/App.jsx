import Beranda from './page/Beranda'
import { BrowserRouter, Routes, Route } from 'react-router'
import MobileNavMenu from './components/MobileNavMenu'
import NavBar from './components/NavBar'
import { useState } from 'react'
import Kontak from './page/Kontak'
import InfoGuru from './page/InfoGuru'
import Galeri from './page/galeri'


function App() {
  const [a, b] = useState(null)

  const ubah = () => {
    b(false)
  }
  const bahu = () => {
    b(true)
  }

  return (
    <>
      <NavBar click={bahu} />
      <BrowserRouter>
        <MobileNavMenu isOpen={a} onClose={ubah} />
        <Routes>
          <Route path='/' element={<Beranda />} />
          <Route path='/galeri' element={<Galeri />} />
          <Route path='/info-guru' element={<InfoGuru />} />
          <Route path='/kontak' element={<Kontak />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App