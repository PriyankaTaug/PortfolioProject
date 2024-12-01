import { useState } from 'react'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router> {/* Use BrowserRouter instead of Router */}
   <Routes>
     <Route path="/" element={<Home />} /> 
     
   </Routes>
 </Router>
 </>
  )
}

export default App
