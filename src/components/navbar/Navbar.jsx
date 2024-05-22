import React from 'react'
import { useState } from 'react'
import styles from './Navbar.module.css'
import {AiOutlineMenu, AiOutlineClose, AiOutlineSearch,AiOutlineUser } from 'react-icons/ai'
import Logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <header className={styles.navbar}>
        <img src={Logo}/>
        <nav>
            <ul className={styles.menu}>
                <li>
                    <a href='/'>Learn more</a>
                </li>
                <li>
                    <a href='/'>Log in</a>
                </li>
                <li>
                    <a href='/'>Sign up</a>
                </li>
                <li>
                    <AiOutlineSearch size={25} style={{marginTop:'9px'}}/>
                </li>
                <li>
                    <AiOutlineUser size={25} style={{marginTop:'9px'}}/>
                </li>
            </ul>
        </nav>
        <div className={styles.mobile_btn}>
            <AiOutlineMenu size={25}/>
        </div>
    </header>
  )
}

export default Navbar