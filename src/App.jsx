import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Tokenomics from './components/Tokenomics'
import Roadmap from './components/Roadmap'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useSound from 'use-sound'
function App() {
  const mainRef = useRef(null);
  const aboutRef = useRef(null);
  const tokenomicsRef = useRef(null);
  const roadMapRef = useRef(null);
  const contactRef = useRef(null);
  const [play, {stop}] = useSound('../background.mp3', {
    volume: 0.1
  });
  const [sound, setSound] = useState(false)
  const triggerSound = () => {
    if(sound){
      stop()
    }else {
      play()
    }
    setSound(!sound)
  }
  const scrollToMainRef = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToAboutRef = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToTokenomicsRef = () => {
    tokenomicsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToRoadmapRef = () => {
    roadMapRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToContactRef = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='h-screen w-screen bg-primary-2 overflow-x-hidden'>
      <Navbar 
        scrollToMainRef={scrollToMainRef}
        scrollToAboutRef={scrollToAboutRef}
        scrollToTokenomicsRef={scrollToTokenomicsRef}
        scrollToRoadmapRef={scrollToRoadmapRef}
        scrollToContactRef={scrollToContactRef}
      />
      <div ref={mainRef}>
        <Main />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={tokenomicsRef}>
        <Tokenomics />
      </div>
      <div ref={roadMapRef}>
        <Roadmap />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
      <div className='mute-button' onClick={triggerSound} >
        {sound?(
          <img src='../sound.png'/>
        ):(
          <img src='../defean.png' />
        )}
      </div>
    </div>
  )
}

export default App