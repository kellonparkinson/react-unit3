import React, { useEffect, useState } from 'react'
import '../../App.css'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import axios from 'axios'
import { BiSearch } from 'react-icons/bi'

const HomeScreen = () => {
  const devMtnURL = 'https://recipes.devmountain.com'
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get(`${devMtnURL}/recipes`)
      .then((res) => {
        console.log(res.data)
        setRecipes(res.data)
      })
      .catch((err) => console.log(err))
  },
  [])

  const recipeDisplay = recipes.filter(
    (recipe, index) => {
        let title = recipe.recipe_name.toLowerCase()
        let searchParams = search.toLowerCase()
        return title.includes(searchParams)
    }).map(
      (recipe, index) => {
        return <RecipeCard recipe={recipe}/>
    })

  return (
    <div className='home-container'>
      <AdBanner />
      
      <div className="search">
        <BiSearch />
        <input
          type="text"
          placeholder='Search for a Recipe'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="cards-container">
        {search !== '' ? recipeDisplay : null}
      </div>
    </div>
  )
}

export default HomeScreen