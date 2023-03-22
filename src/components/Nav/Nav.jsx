import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
const Nav = () => {
  
  return (
    <div className={styles.nav}>
      <button>Home</button>
      <button>Peliculas</button>
      <button>Series</button>
      <SearchBar/>
    </div>
  )
}

export default Nav