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
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white rounded-lg p-4">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <label className="block mb-4">
        Price Range:
        <div className="flex flex-col sm:flex-row gap-2 mt-3">
          <div className="w-full">
            <p className="text-xs mb-2 text-gray-500">Min Price</p>
            <input
              type="number"
              name="min"
              value={filters.priceRange.min}
              onChange={handlePriceRangeChange}
              className="border rounded px-2 py-2 w-full"
            />
          </div>
          <div className="w-full">
            <p className="text-xs mb-2 text-gray-500">Max Price</p>
            <input
              type="number"
              name="max"
              value={filters.priceRange.max}
              onChange={handlePriceRangeChange}
              className="border rounded px-2 py-2 w-full"
            />
          </div>
        </div>
      </label>
      <div className="mt-4">
        <button
          onClick={applyFilters}
          className="bg-[#00B4D8] text-white px-4 py-2 rounded mr-4"
        >
          Apply Filters
        </button>
        <button onClick={resetFilters} className="text-gray-500 ml-8">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
