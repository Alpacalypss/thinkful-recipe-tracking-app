import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const initialState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  }
  const [form, setForm] = useState({...initialState})
  
  const handleChange = ({target}) => {
    setForm({...form, [target.name]: target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(form)
    setForm({...initialState})
  }

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <label htmlFor="name"></label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Dish Name"
                required
                onChange={handleChange}
                value={form.name}
                autofocus="on"
                />
            </td>
            <td>
              <label htmlFor="cuisine"></label>
              <input
                id="cuisine"
                type="text"
                name="cuisine"
                placeholder="Origin of the dish"
                required
                onChange={handleChange}
                value={form.cuisine}
                />
            </td>
            <td>
              <label htmlFor="photo"></label>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="Photo URL here"
                required
                onChange={handleChange}
                value={form.photo}
                />
            </td>
            <td>
              <label htmlFor="ingredients"></label>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="List ingredients here"
                required
                rows={2}
                onChange={handleChange}
                value={form.ingredients}
                />
            </td>
            <td>
              <label htmlFor="preparation"></label>
              <textarea
                id="preparation"
                name="preparation"
                placeholder="Preparation instructions here"
                required
                rows={2}
                onChange={handleChange}
                value={form.preparation}
                />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;