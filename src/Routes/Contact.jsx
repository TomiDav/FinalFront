import React from 'react'
import Form from '../Components/Form'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.form_container}>
        <span className={styles.title}>¿Quiere saber más?</span>
        <p className={styles.content}>Envianos tus datos y nos pondremos en contacto</p>
        <Form/>
      </div>
    </div>
    </>
  )
}

export default Contact