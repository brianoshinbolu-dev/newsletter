import { useState } from 'react'
import logo from './assets/images/illustration-sign-up-desktop.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="container">
      <div className="form"></div>
      <div className="image">
        <img src={logo} alt="logo" />
      </div>
      hello
      </div>
  )
}

export default App
