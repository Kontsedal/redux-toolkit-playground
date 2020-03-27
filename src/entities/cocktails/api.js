const ENDPOINTS = {
  SEARCH: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",
};

export const getCocktailsList = async (ingredientName) => {
  let data = await fetch(ENDPOINTS.SEARCH + ingredientName).then((response) =>
    response.json()
  );
  return data.drinks;
};
