import React from 'react'
import styles from './Success.module.css'
function Success(props) {
  return (
    <h3 className={styles.success}>Gracias {props.nombre}, te contactaremos cuando antes vía mail</h3>
  )
}

export default Success