import React, { useContext, useEffect, useState } from 'react'
import Card from '../Components/Card'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../Components/Contexts/ThemeContext'
import styles from './Home.module.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [data, setData] = useState([])
  const {theme} = useContext(ThemeContext)
  
  async function fetchData(){
    let dataAsync
    try {
        dataAsync = await(await fetch(`https://jsonplaceholder.typicode.com/users`)).json();
    } catch(e) {
        console.log(e.message)
    }
    setData(dataAsync)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
				<div className={styles.container}>
					{data.map(
						(dentista) =>{
    						return(
                <Link className={styles.link} key={dentista.id} to={`/dentist/${dentista.id}`}>
	 							  <Card name={dentista.name} phone={dentista.phone} id={dentista.id}/>
							  </Link>
              )
						}
					)}
				</div>
		</>
  )
}

export default Home