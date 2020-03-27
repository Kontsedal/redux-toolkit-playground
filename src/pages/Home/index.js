import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientsData } from "../../entities/ingredients/selectors";
import { ingredientActions } from "../../entities/ingredients/slice";
import { HomePageView } from "./view";

export const HomePage = () => {
  let {
    error: loadIngredientsError,
    loading: isIngredientsLoading,
    list: ingredients,
  } = useSelector(getIngredientsData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ingredientActions.fetchIngredients());
  }, [dispatch]);
  return (
    <HomePageView
      loadIngredientsError={loadIngredientsError}
      isIngredientsLoading={isIngredientsLoading}
      ingredients={ingredients}
    />
  );
};
