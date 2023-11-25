import React from "react";

function RecipeLayout({recipe, RecipeDelete}) {
    const {name, cuisine, photo, ingredients, preparation} = recipe
       return (
        <tr>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td><img src={photo}/></td>
          <td><p>{ingredients}</p></td>
          <td><p>{preparation}</p></td>
          <td><button name="delete" onClick={RecipeDelete}>Delete</button></td>
        </tr>
         )
}

export default RecipeLayout