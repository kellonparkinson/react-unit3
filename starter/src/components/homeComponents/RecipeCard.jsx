import React from 'react'
import '../../App.css'

const RecipeCard = () => {
  return (
    <div className='recipe-card'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Cup-Noodles-2.jpg" alt="noodles" />
        <h3>Recipe Title, recipe title, recipe title</h3>
        <button>See More</button>
    </div>
  )
}

export default RecipeCard