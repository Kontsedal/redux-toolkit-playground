import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CocktailView } from "./view";
import { getCocktailById } from "../../entities/cocktails/api";

export const CocktailPage = () => {
  let { id } = useParams();
  let [cocktailData, setCocktailData] = useState({
    loading: true,
    error: false,
    info: undefined,
  });
  useEffect(() => {
    (async () => {
      try {
        setCocktailData({ ...cocktailData, loading: true, error: false });
        const info = await getCocktailById(id);
        setCocktailData({ info, loading: false, error: false });
      } catch (error) {
        setCocktailData({
          ...cocktailData,
          loading: true,
          error: error,
        });
      }
    })();
  }, [id]);
  return (
    <CocktailView
      loading={cocktailData.loading}
      error={cocktailData.error}
      info={cocktailData.info}
    />
  );
};
