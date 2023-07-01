import React from 'react'
import styles from './Error.module.css'

function Error(props) {
  return (
    <h3 className={styles.error}>{props.error}</h3>
  )
}

export default Error