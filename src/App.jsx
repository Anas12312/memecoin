import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen w-screen bg-primary-2 overflow-x-hidden'>
      <Navbar />
      <Main />
      <About />
      <Tokenomics />
      <Roadmap />
      <Contact />
    </div>
  )
}

export default App