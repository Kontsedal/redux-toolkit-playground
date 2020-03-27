import React from "react";
import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { compile } from "path-to-regexp";
import { ROUTES } from "../../../index";
export const Cocktail = ({ name, id, imageSrc }) => {
  const toPath = compile(ROUTES.COCKTAIL);
  return (
    <Link to={toPath({ id })} className={s.cocktail}>
      <h2 className={s.name}>{name}</h2>
      <img src={imageSrc} alt={name} className={s.cover} />
    </Link>
  );
};
