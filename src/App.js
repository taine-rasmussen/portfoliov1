import './App.css';
import { useContext } from 'react'
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
  return (
    <>
      <ActiveNavContext.Provider value='context'>
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
