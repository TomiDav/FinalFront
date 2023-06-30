import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from './Contexts/ThemeContext'
import styles from './Header.module.css'

const Header = () => {
  const theme = useContext(ThemeContext)
  return (
    <header className={styles.header}>
      <h1>Consultorio Odontológico</h1>
      <div className={styles.buttons}>
        <Link className={styles.link} to="/home">Home</Link>    
        <Link className={styles.link} to="/contact">Contacto</Link>
        <Link className={styles.link} to="/favs">Favoritos</Link>
        <button className={`${styles.change}`}onClick={()=>theme.toggle()}><span className={styles.btn_txt}>Cambiar tema</span></button>
      </div>
    </header>
  )
}

export default Header