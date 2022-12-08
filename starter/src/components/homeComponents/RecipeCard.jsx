import React from 'react'
import '../../App.css'

const RecipeCard = ({ recipe }) => {
  return (
    <div className='recipe-card'>
        <img src={recipe.image_url} alt={recipe.type} />
        <h3>{recipe.recipe_name}</h3>
        <button>See More</button>
    </div>
  )
}

export default RecipeCard