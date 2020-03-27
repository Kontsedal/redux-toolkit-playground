import React from "react";
import s from "./styles.module.scss";
export const Cocktail = ({ name, id, imageSrc }) => (
  <div className={s.cocktail}>
    <h2 className={s.name}>{name}</h2>
    <img src={imageSrc} alt={name} className={s.cover} />
  </div>
);
