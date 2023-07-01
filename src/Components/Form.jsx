import { useState } from "react";
import Success from "./Success";
import Error from "./Error";
import styles from './Form.module.css'

function Form(props) {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  function onChangeNombre(e) {
    setNombre(e.target.value);
  }

  function handeSubmit(e) {
    e.preventDefault();

    if ((nombre.length < 5)) {
      setError("El nombre debe ser mayor a 5 caracteres");
      setSuccess()
    } else {
      setError()
      setSuccess(nombre)
    }
  }

  return (
    <>
      <form className={styles.form} onSubmit={handeSubmit}>
        <input
          placeholder="Ingrese su nombre"
          className={styles.input}
          type="text"
          id="nombre"
          required
          onChange={onChangeNombre}
        />
        
        <input
          placeholder="Ingrese su correo electrónico"
          className={styles.input}
          type="email" 
          id="email"
          required
        />

        <button className={styles.button} type="submit">Enviar</button>
      </form>

      {error && <Error error={error}/>}
      {success && <Success nombre={nombre}/>}
    </>
  );
}

export default Form