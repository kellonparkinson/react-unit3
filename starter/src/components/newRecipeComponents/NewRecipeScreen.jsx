import React, { useState } from "react";
import { Formik } from "formik"

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([])
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState('')

  const initialValues = {
    type: '',
    recipeName: '',
    imageURL: '',
    prepTime: '',
    cookTime: '',
    serves: '',
    ingredients: [],
    instructions: ''
  }

  const onSubmit = (values) => {
    values.ingredients = ingredients
    console.log(values)
  }

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }])
    setName('')
    setQuantity('')
  }

  return (
    <section className="new-recipe-container">
      <h1>Tell us about your recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
        return <form className="recipe-form">
        <div className="name-image">
          <input type="text" placeholder="Name" value={values.recipeName} name='recipeName' onChange={handleChange}/>
          <input type="text" placeholder="Image URL" value={values.imageURL} name='imageURL' onChange={handleChange}/>
        </div>

        <div className="radio">
          <label htmlFor="cook">
            <input type="radio" value='cook' />Cook
          </label>
          <label htmlFor="bake">
            <input type="radio" value='bake' />Bake
          </label>
          <label htmlFor="drink">
            <input type="radio" value='drink' />Drink
          </label>
        </div>

        <div className="form-info">
          <input type="text" placeholder="Prep Time" value={values.prepTime} name='prepTime' onChange={handleChange}/>
          <input type="text" placeholder="Cook Time" value={values.cookTime} name='cookTime' onChange={handleChange}/>
          <input type="text" placeholder="Serves" value={values.serves} name='serves' onChange={handleChange}/>
        </div>

        <div className="form-ingredients">
          <div className="ing-container">

            <div className="left">
              <input 
                type="text"
                placeholder="Ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
              <input
                type="text"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}/>
            </div>

            <div className="right">
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>
          </div>

          <button type='button' className="add-btn" onClick={addIngredient}>Add Another</button>
        </div>

        <textarea name="Instructions" cols="61" rows="9" placeholder="What are the instructions?" value={values.instructions}></textarea>

        <button type='submit' className="save-btn">Save</button>
      </form>
      }}
      </Formik>
      
    </section>
  );
};

export default NewRecipeScreen