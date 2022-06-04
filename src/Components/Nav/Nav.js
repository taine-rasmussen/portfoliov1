import React, { useState, useContext } from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { ActiveNavContext } from '../../ActiveNavContext'


const Nav = () => {

  const {
    activeNav,
    setActiveNav
  } = useContext(ActiveNavContext)

  return (
    <nav>
      <a
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      ><AiOutlineHome /></a>
      <a
        href='#about'
        onClick={() => setActiveNav('about')}
        className={activeNav === 'about' ? 'active' : ''}
      ><AiOutlineUser /></a>
      <a
        href='#experience'
        onClick={() => setActiveNav('experience')}
        className={activeNav === 'experience' ? 'active' : ''}
      >
        <BiBook /></a>
      <a
        href='#contact'
        onClick={() => setActiveNav('contact')}
        className={activeNav === 'contact' ? 'active' : ''}
      ><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav
