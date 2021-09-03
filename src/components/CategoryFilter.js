import React from "react";

function CategoryFilter({ categories, selectedCategory, resetCat }) {

  const buttonEls = categories.map(category => 
  <button key={category} 
          onClick={() => resetCat(category)}
          className={selectedCategory === category ? 'selected' : ''} > {category}
  </button>);

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonEls}
    </div>
  );
}

export default CategoryFilter;
