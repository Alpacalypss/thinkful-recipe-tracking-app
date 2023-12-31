import React from "react";
import RecipeLayout from "./RecipeLayout"

function RecipeList({recipes, RecipeDelete}) {
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preperation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody> 
          {recipes.map((recipe, index) => ( //mapping each recipe indexed into the table body
          <RecipeLayout 
            key={index}
            recipe={recipe} 
            RecipeDelete={() => RecipeDelete(index)} //providing the delete function to the button
            />))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
