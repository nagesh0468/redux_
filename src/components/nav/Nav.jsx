import React from 'react'
import style from './nav.module.css';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <>
    <header className={style.container} >
      <div className={style.logo}>
        <span>code master</span>
      </div>
      <nav className={style.nav} >
        <Link to='/'>course</Link>
        <Link to='/reducer'>reducer</Link>
        <Link to='/redux'>redux</Link>
        <Link to='/login'>login</Link>
      </nav>
    </header>
      
    </>
  )
}

export default Nav
