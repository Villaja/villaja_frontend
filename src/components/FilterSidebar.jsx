// FilterSidebar.jsx
import React, { useState } from "react";

const FilterSidebar = ({ filters, setFilters, applyFilters, resetFilters }) => {
  const handlePriceRangeChange = (e) => {
    setFilters({
      ...filters,
      priceRange: {
        ...filters.priceRange,
        [e.target.name]: parseFloat(e.target.value),
      },
    });
  };

  const handleCategoryChange = (e) => {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  };

  return (
    <div className="w-1/4 bg-white h-96 rounded-lg p-4">
<h2 className="text-xl font-bold mb-4">Filters</h2>
      <label className="block mb-2">
        Price Range: <br/>
        <div className="flex mt-3 gap-2">
            <div className="">
            <p className="text-xs mb-2 text-gray-500">Min Price</p>
            <input
          type="number"
          name="min"
          value={filters.priceRange.min}
          onChange={handlePriceRangeChange}
          className="border rounded px-2 py-2"
        />
        
            </div>
            <div>
            <p className="ml-2 text-xs mb-2 text-gray-500">Max Price</p>
            <input
          type="number"
          name="max"
          value={filters.priceRange.max}
          onChange={handlePriceRangeChange}
          className="border rounded px-2 py-2 ml-2"
        />
            </div>
        </div>
       
       
      </label>
      {/* <label className="block mt-5 mb-4">
        <p className="">Category: </p><br/>
        <select
          value={filters.category}
          onChange={handleCategoryChange}
          className="border rounded px-2 py-1 w-full"
        >
          <option value="">All Categories</option>
          <option value="phones">Phones</option>
          <option value="computers">computers</option>
          <option value="accessories">Accessories</option>
        </select>
      </label> */}
      {/* Add more filter options here if needed */}
      <div className="mt-6">
        <button
          onClick={applyFilters}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Apply Filters
        </button>
        <button onClick={resetFilters} className="text-gray-500">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;