import React from "react";
import styles from './card.module.css'

function Card({ title, bgImage }) {
  return (
      <div id={styles.course} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className={styles.cardInfo}>
        <h3> {title} </h3>
      </div>
    </div>
  );
}

export default Card;
