import React from "react";

function Filter({ selectedCategory, onCategoryChange }) {
  function handleChange(e) {
    onCategoryChange(e.target.value);
  }

  return (
    <div className="Filter">
      <label htmlFor="category">Filter by category:</label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;