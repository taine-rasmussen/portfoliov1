import React from 'react'
import './Nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';


const Nav = () => {
   return (
      <nav>
         <a href='#' className="active"><AiOutlineHome /></a>
         <a href='#about'><AiOutlineUser /></a>
         <a href='#experience'><BiBook /></a>
         <a href='#contact'><BiMessageSquareDetail /></a>
      </nav>
   )
}

export default Nav
