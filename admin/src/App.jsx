import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Test from '../pages/test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes path='/*'>
          <Route path='/test' element={<Test/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
