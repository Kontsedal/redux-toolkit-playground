import React from "react";
import Select from "react-select";
import s from "./styles.module.scss";
import { Loader } from "../../components/Loader";
import { Cocktail } from "./components/Cocktail";

export const HomePageView = ({
  loadIngredientsError,
  isIngredientsLoading,
  ingredients,
  onIngredientChange,
  selectedIngredient,
  loadCocktailsError,
  isCocktailsLoading,
  cocktails,
}) => {
  const hasCocktails = Boolean(
    !loadCocktailsError && !isCocktailsLoading && cocktails.length
  );
  const hasNoCocktails = Boolean(
    !loadCocktailsError &&
      !isCocktailsLoading &&
      !cocktails.length &&
      selectedIngredient
  );

  const cocktailsElements = cocktails.map((cocktail) => (
    <Cocktail
      key={cocktail.idDrink}
      id={cocktail.idDrink}
      name={cocktail.strDrink}
      imageSrc={cocktail.strDrinkThumb}
    />
  ));

  return (
    <div className={s.page}>
      {loadIngredientsError && (
        <p className={s.error}>
          Load ingredients error: {loadIngredientsError.message}
        </p>
      )}
      <div>
        <p>Select main cocktail ingredient:</p>
        <Select
          options={ingredients.map((item) => ({ label: item, value: item }))}
          isLoading={isIngredientsLoading}
          onChange={(option) => onIngredientChange(option.value)}
          value={{ label: selectedIngredient, value: selectedIngredient }}
        />
      </div>
      <div>
        {loadCocktailsError && (
          <p className={s.error}>
            Failed to load cocktails: {loadCocktailsError}
          </p>
        )}
        {isCocktailsLoading && (
          <div className={s.loaderWrapper}>
            <Loader />
          </div>
        )}
        {hasCocktails && (
          <div className={s.cocktailsWrapper}>{cocktailsElements}</div>
        )}
        {hasNoCocktails && <p>No cocktails were found</p>}
      </div>
    </div>
  );
};
