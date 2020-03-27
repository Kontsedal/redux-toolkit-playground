const ENDPONITS = {
  LIST: "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
};

export const getIngredientsList = async () => {
  let data = await fetch(ENDPONITS.LIST).then((response) => response.json());
  return data.drinks.map((drink) => drink.strIngredient1);
};
