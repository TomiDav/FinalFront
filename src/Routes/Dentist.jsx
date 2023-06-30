import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../Components/Header'
import Card from '../Components/Card'
import Infocard from '../Components/Infocard'
import styles from './Dentist.module.css'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Dentist = () => {
  const [dentist, setDentist] = useState()
  const param = useParams()
  async function fetchDentist(){
    let dataAsync
    try {
        dataAsync = await(await fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)).json();
    } catch(e) {
        console.log(e.message)
    }
    setDentist(dataAsync)
  }

  useEffect(() => {
    fetchDentist()
  }, [])

  return (
    <>
      <div className={styles.container}>
        {dentist && <Infocard name={dentist.name} email={dentist.email} phone={dentist.phone} website={dentist.website}/>}
      </div>
    </>
  )
}

export default Dentist