import { useState } from "react";
import Success from "./Success";
import Error from "./Error";

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
      <form onSubmit={handeSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input
          type="text"
          id="nombre"
          required
          onChange={onChangeNombre}
        />
        
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email"
          required
        />


        <button type="submit">Enviar</button>
      </form>

      {error && <Error error={error}/>}
      {success && <Success nombre={nombre}/>}
    </>
  );
}

export default Form