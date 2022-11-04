import React from 'react';

function Filter({filter}) {
    return (
        <div className="Filter">
        <select name="filter" onChange={filter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter;