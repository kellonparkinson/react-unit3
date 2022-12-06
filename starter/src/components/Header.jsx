import React from "react"
import { Link } from "react-router-dom";
import '../App.css'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to='/'>
          <button>Home</button>
        </Link>
        <Link to='/newrecipe'>
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header