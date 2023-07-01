import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
function Card(props) {
  const {name, phone, id} = props

  const [isLiked, setIsLiked] = useState(false);

  function handleLiked(){
    setIsLiked(!isLiked);
  };

  function handleFav(e){
    e.preventDefault()
    handleLiked()
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

    const isAlreadyFavorite = favoritos.some(favorito => favorito.id === id);

    if (!isAlreadyFavorite) {
      const nuevoFavorito = { id, name, phone };
      favoritos.push(nuevoFavorito);

      localStorage.setItem('favoritos', JSON.stringify(favoritos));
    } else {
      const updatedFavorites = favoritos.filter(favorito => favorito.id !== id);
      return localStorage.setItem('favoritos', JSON.stringify(updatedFavorites));
    }
  }

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    const isFavorite = favoritos.some((favorito) => favorito.id === id);
    setIsLiked(isFavorite);
  }, [isLiked]);

  return (
    <>
      <div className={styles.card}>
        <img className={styles.img_od} src="/foto_odontologo.png" alt="Foto del odontólogo"/>
        <div className={styles.card_body}>
          <h3>{name}</h3>
          <p className={styles.card_phone}>Teléfono: {phone}</p>
          <FontAwesomeIcon size='2xl' className={styles.heart} onClick={handleFav} icon={faHeart} style={isLiked ? {color: "#4da8cf"} : {color: "#bababa"}} />
        </div>
      </div>
    </>
  )
}

export default Card