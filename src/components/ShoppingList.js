import React, { useState } from "react";
import Item from "./Item";
import Filter from "./Filter";
import items from "../data/items";

function ShoppingList() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  const itemsToDisplay =
    selectedCategory === "All"
      ? items
      : items.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <div className="ShoppingList">
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;