import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailScreen = () => {
  const { id } = useParams()
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    axios
      .get(`https://recipes.devmountain.com/recipes/${id}`)
      .then((res) => {
        console.log(res.data)
        setRecipe(res.data)
      })
      .catch((err) => console.log(err))
  },
  [id])

  return (
    <section className='detail-container'>
      <div className="recipe-image"
        style={{
          background: `linear-gradient(190deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${recipe.image_url})`,
          backgroundSize: "fill"
        }}>
          <h1>{recipe.recipe_name}</h1>
      </div>

      <div className="detail-info-container">
        <div className="recipe-info">
          <h1>Recipe</h1>
          <p>Prep Time: {recipe.prep_time}</p>
          <p>Cook Time: {recipe.cook_time}</p>
          <p>Serves: {recipe.serves}</p>
          <h1>Ingredients</h1>
          <p>whoa</p>
        </div>
        <div className="instructions">
          <h1>Instructions</h1>
          <p>All instructions, isdhf oihef osdnfdsojn fsiofg okdsfn sok gsokhfg of gifvnu vushviruvb dfviuhsiufh siruhv sfjbn sruf sfiuvb fusvhs urijsfvhiusfhv ijsbfib viu, isdhf oihef osdnfdsojn fsiofg okdsfn sok gsokhfg of gifvnu vushviruvb dfviuhsiufh siruhv sfjbn sruf sfiuvb fusvhs urijsfvhiusfhv ijsbfib viu, isdhf oihef osdnfdsojn fsiofg okdsfn sok gsokhfg of gifvnu vushviruvb dfviuhsiufh siruhv sfjbn sruf sfiuvb fusvhs urijsfvhiusfhv ijsbfib viu, isdhf oihef osdnfdsojn fsiofg okdsfn sok gsokhfg of gifvnu vushviruvb dfviuhsiufh siruhv sfjbn sruf sfiuvb fusvhs urijsfvhiusfhv ijsbfib viu. </p>
        </div>
      </div>
    </section>
    // cook_time image_url ingredients instructions prep_time recipe_id recipe_name serves type
  );
};

export default DetailScreen