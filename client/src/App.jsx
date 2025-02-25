import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes path='/*'>
          <Route/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
