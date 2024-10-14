import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Question from './pages/Question'
import Result from './pages/Result'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/question' element={<Question />} />
        <Route path='/result' element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App