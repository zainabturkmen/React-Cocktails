import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [cocktail, setCocktail] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getCocktails() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instractions,
            strIngredienct1,
            strIngredienct2,
            strIngredienct3,
            strIngredienct4,
            strIngredienct5,
          } = data.drinks[0];

          const ingredients = [
            strIngredienct1,
            strIngredienct2,
            strIngredienct3,
            strIngredienct4,
            strIngredienct5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instractions,
          };

          setCocktail(newCocktail)
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    getCocktails();
  }, [id]);
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className="section-title">no cocktail to display </h2>
  }

  const {name, image, category, info, glass, instructions, ingredients} = cocktail;
  return (
    <div>
      <h2>{id}</h2>
    </div>
  );
};

export default SingleCocktail;
