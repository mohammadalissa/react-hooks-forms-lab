import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit,onChange}) {
  return (
    <form onSubmit={onItemFormSubmit} className="NewItem">
      <label>
        Name:
        <input onChange={onChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select onChange={onChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
