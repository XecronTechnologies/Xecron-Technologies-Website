import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'

const maintanence = '/Maintanence.gif'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <img src={maintanence} alt="maintanence" />
      <h1>Site is Under Maintanence</h1>
      {/* <Home /> */}
    </>
  )
}

export default App
