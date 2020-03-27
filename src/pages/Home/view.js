import React from "react";

export const HomePageView = ({
  loadIngredientsError,
  isIngredientsLoading,
  ingredients,
}) => {
  return (
    <div>
      {JSON.stringify({
        loadIngredientsError,
        isIngredientsLoading,
        ingredients,
      })}
    </div>
  );
};
