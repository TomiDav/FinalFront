import React from 'react'
import styles from './Infocard.module.css'

function Infocard(props) {
  const {name, email, phone, website} = props

  return (
    <div className={styles.infocard}>
      <h2>Nombre: {name}</h2>
      <h2>Email: {email}</h2>
      <h2>Teléfono: {phone}</h2>
      <h2>Website: <a target='_blank' href={website}>{website}</a></h2>
    </div>
  )
}

export default Infocard