import './App.css';
import { useState } from 'react'
import { ActiveNavContext } from './ActiveNavContext'
import { ParallaxProvider, useParallax } from 'react-scroll-parallax'


// Components
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Work from './Components/Work/Work'

function App() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <ParallaxProvider>
        <ActiveNavContext.Provider value={{ activeNav, setActiveNav }}>
          <Header />
          <Nav />
          <About />
          <Work />
          <Contact />
        </ActiveNavContext.Provider>
      </ParallaxProvider>
    </>
  );
}

export default App;
