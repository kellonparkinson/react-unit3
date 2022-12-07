import React, { useEffect, useState } from 'react'
import '../../App.css'
import AdBanner from './AdBanner'
import RecipeCard from './RecipeCard'
import axios from 'axios'

const HomeScreen = () => {
  const devMtnURL = 'https://recipes.devmountain.com'
  const [recipes, setRecipes] = useState({})
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

  return (
    <div className='home-container'>
      <AdBanner />
      
      <div className="search">
        <input type="text" placeholder='Search for a Recipe' />
      </div>

      <div className="cards-container">
        <RecipeCard />
      </div>
    </div>
  )
}

export default HomeScreen