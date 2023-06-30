import React from 'react'
import Form from '../Components/Form'
import Header from '../Components/Header'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <>
    <div>
      <h2>¿Quiere saber más?</h2>
      <p>Envianos tus datos y nos pondremos en contacto</p>
      <Form/>
    </div>
    </>
  )
}

export default Contact