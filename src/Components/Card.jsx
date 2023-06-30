import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card(props) {
  const {name, phone, id} = props
  return (
    <>
      <div className={styles.card}>
        <img className={styles.img_od} src="/foto_odontologo.png" alt="Foto del odontólogo"/>
        <div className={styles.card_body}>
          <h3>{name}</h3>
          <p className={styles.card_phone}>Teléfono: {phone}</p>
          <button className={styles.favorite}>Fav</button>
        </div>
      </div>
    </>
  )
}

export default Card