import s from "./styles.module.scss";
import { Link } from "react-router-dom";
import { ROUTES } from "../index";
import React from "react";
import { Loader } from "../../components/Loader";

export const CocktailView = ({ loading, error, info }) => (
  <div className={s.page}>
    <div className={s.back}>
      <Link to={ROUTES.HOME}>Back</Link>
    </div>
    {loading && (
      <div className={s.loaderWrapper}>
        <Loader />
      </div>
    )}
    {!loading && !error && !info && <p>No cocktail were found</p>}
    {error && (
      <p className={s.error}>Failed to load cocktail: {error.message}</p>
    )}
    {info && (
      <div className={s.info}>
        <img src={info.strDrinkThumb} alt={info.strDrink} className={s.cover} />
        <div className={s.details}>
          <h1>{info.strDrink}</h1>
          <p className={s.instructions}>{info.strInstructions}</p>
        </div>
      </div>
    )}
  </div>
);
