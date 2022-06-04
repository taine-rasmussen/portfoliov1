import './App.css';
import { useState } from 'react'
import { ActiveNavContext } from './ActiveNavContext'

// Components
import Header from './Components/Header/Header'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import Experience from './Components/Experience/Experience'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

function App() {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <>
      <ActiveNavContext.Provider value={{ activeNav, setActiveNav }}>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Portfolio />
        <Contact />
        <Footer />
      </ActiveNavContext.Provider>
    </>
  );
}

export default App;
