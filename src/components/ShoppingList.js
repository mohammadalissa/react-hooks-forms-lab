import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

function ShoppingList({ items,setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('')
  const [form,setForm] = useState({category:'Produce'})
  function handleSearchChange(event){
    setSearch(event.target.value)
    //console.log(search)
  }
  function handleFormChange(event){
    const name = event.target.name;
    const value = event.target.value;
    setForm(values => ({...values,id: uuidv4(), [name]: value}))
    //console.log(form)
  }
  function handleSubmit(event){
    event.preventDefault();
    setItems( [...items,form])
    // console.log(items)
    setForm({})
    //console.log(form)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && item.name.toLowerCase().includes(search.toLowerCase()))  return true;

    return (item.category === selectedCategory) && item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} onChange={handleFormChange} />
      <Filter search={search} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
