import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import NavigationBar from './components/NavigationBar'

const maintanence = '/Maintanence.gif'
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
    <NavigationBar />

      <img src={maintanence} alt="maintanence" />
      <h1>Site is Under Maintanence</h1>
      {/* <Home /> */}
    </>
  )
}

export default App
