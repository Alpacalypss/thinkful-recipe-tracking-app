import React from "react";

function RecipeLayout({recipe, RecipeDelete}) {
    //destructuring recipe into components to create line by line returns. Could be replaced with recipe.name, recipe.cuisine, etc...
    const {name, cuisine, photo, ingredients, preparation} = recipe
    //returning each row layout by column
       return (
        <tr>
          <td>{name}</td>
          <td>{cuisine}</td>
          <td><img src={photo}/></td>
          <td className="content_td"><p>{ingredients}</p></td>
          <td className="content_td"><p>{preparation}</p></td>
          <td><button name="delete" onClick={RecipeDelete}>Delete</button></td>
        </tr>
         )
}

export default RecipeLayout