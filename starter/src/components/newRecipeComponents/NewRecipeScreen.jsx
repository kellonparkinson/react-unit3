import React from "react";

const NewRecipeScreen = () => {
  return (
    <section className="new-recipe-container">
      <h1>Tell us about your recipe!</h1>
      <form className="recipe-form">
        <div className="name-image">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Image URL"/>
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
          <input type="text" placeholder="Prep Time"/>
          <input type="text" placeholder="Cook Time"/>
          <input type="text" placeholder="Serves"/>
        </div>

        <div className="form-ingredients">
          <div className="ing-container">

            <div className="left">
              <input type="text" placeholder="Ingredient"/>
              <input type="text" placeholder="Quantity"/>
            </div>

            <div className="right">
              <ul>
                <li>Test</li>
                <li>Test</li>
                <li>Test</li>
              </ul>
            </div>
          </div>

          <button className="add-btn">Add Another</button>
        </div>

        <textarea name="" id="" cols="61" rows="9" placeholder="What are the instructions?"></textarea>
        <button type='submit' className="save-btn">Save</button>
      </form>
    </section>
  );
};

export default NewRecipeScreen