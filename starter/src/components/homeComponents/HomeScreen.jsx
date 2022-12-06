import React, { useEffect, useState } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'

const HomeScreen = () => {
  const devMtnURL = 'https://recipes.devmountain.com'
  const [recipes, setRecipes] = useState({})

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
    <div>
      <AdBanner />
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen