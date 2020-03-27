import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsData } from "../../entities/ingredients/selectors";
import { ingredientActions } from "../../entities/ingredients/slice";
import { HomePageView } from "./view";
import { getCocktailsData } from "../../entities/cocktails/selectors";
import { cocktailsActions } from "../../entities/cocktails/slice";

export const HomePage = () => {
  const {
    error: loadIngredientsError,
    loading: isIngredientsLoading,
    list: ingredients,
  } = useSelector(getIngredientsData);

  const {
    error: loadCocktailsError,
    loading: isCocktailsLoading,
    list: cocktails,
    mainIngredient: selectedIngredient,
  } = useSelector(getCocktailsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientActions.fetchIngredients());
  }, [dispatch]);

  const handleIngredientChange = useCallback((newIngredient) => {
    dispatch(cocktailsActions.setMainIngredient(newIngredient));
    dispatch(cocktailsActions.fetchCocktails(newIngredient));
  }, []);

  return (
    <HomePageView
      loadIngredientsError={loadIngredientsError}
      isIngredientsLoading={isIngredientsLoading}
      ingredients={ingredients}
      selectedIngredient={selectedIngredient}
      onIngredientChange={handleIngredientChange}
      loadCocktailsError={loadCocktailsError}
      isCocktailsLoading={isCocktailsLoading}
      cocktails={cocktails}
    />
  );
};
