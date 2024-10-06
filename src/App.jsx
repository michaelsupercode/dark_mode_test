import { useState } from 'react'

import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
// import About from './pages/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
      </Routes>
    </>
  )
}

export default App
