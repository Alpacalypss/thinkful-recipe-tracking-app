import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  
  //Creating functions to provide props to be passed to children components.
  const createRecipe = (newRecipe) => {
    setRecipes((currentRecipes) => [...currentRecipes, newRecipe])
  }
  
  const RecipeDelete = (toDelete) => {
    setRecipes((currentRecipes) => currentRecipes.filter((recipe, index) => 
      index !== toDelete))
  }
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} RecipeDelete={RecipeDelete}/>
      <RecipeCreate createRecipe={createRecipe}/>
    </div>
  );
}

export default App;

