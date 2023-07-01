import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import styles from './Favs.module.css'

const Favs = () => {
  const [favoritos, setFavoritos] = useState(JSON.parse(localStorage.getItem("favoritos")))
  return (
    <>
      <div className={styles.container}>
        {favoritos.length > 0 ? (
          favoritos.map((favorito) => (
            <Link className={styles.link} key={favorito.id} to={`/dentist/${favorito.id}`}>
              <Card name={favorito.name} phone={favorito.phone} id={favorito.id} />
            </Link>
          ))
        ) : (
          <h3>No hay dentistas favoritos</h3>
        )}
      </div>
    </>
  );
};

export default Favs;
