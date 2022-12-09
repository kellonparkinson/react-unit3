import React from "react";

const NewRecipeScreen = () => {
  return (
    <section className="new-recipe-container">
      <h1>Tell us about your Recipe!</h1>
      <form>
        <div className="name-image">
          <input type="text" />
          <input type="text" />
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
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </div>

        <div className="form-ingredients">
          <input type="text" />
          <input type="text" />
        </div>
        <button>Add Another</button>

        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>
    </section>
  );
};

export default NewRecipeScreen;
