import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MyFooter from './components/MyFooter'
import PriveRoute from './PrivateRoute/PriveRoute'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ position: 'relative' }}>
      <PriveRoute>
        <Navbar />
        <Outlet />
      </PriveRoute>
      
    </div>
  )
}

export default App


