const ENDPOINTS = {
  SEARCH_BY_NAME: "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=",
  SEARCH_BY_ID: "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=",
};

export const getCocktailsList = async (ingredientName) => {
  let data = await fetch(
    ENDPOINTS.SEARCH_BY_NAME + ingredientName
  ).then((response) => response.json());
  return data.drinks;
};

export const getCocktailById = async (id) => {
  let data = await fetch(ENDPOINTS.SEARCH_BY_ID + id).then((response) =>
    response.json()
  );
  return data.drinks[0];
};
