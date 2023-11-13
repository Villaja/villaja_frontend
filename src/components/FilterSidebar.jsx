import React, { useState } from 'react';

const FilterSidebar = ({ filters, setFilters, applyFilters, resetFilters }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
    <div>
      <h2 className="text-xl font-bold mb-4" onClick={() => setIsFilterOpen(!isFilterOpen)}>
        Filter
      </h2>
      <div className={`w-full md:w-auto lg:w-auto xl:w-auto bg-white rounded-lg p-12 ${isFilterOpen ? 'block' : 'hidden'} ${isFilterOpen ? 'md:px-4 md:py-24' : 'md:hidden'} ${isFilterOpen ? 'lg:px-6 lg:py-48' : 'lg:hidden'}`}>

      <label className="block mb-4 sm:mb-3 lg:mb-2">

          Price Range:
          <div className="w-full md:w-full lg:full xl:w-auto  gap-8 gap-8 mt-3 sm:mt-4 lg:mt-6">
            <div className="w-full">
            <p className="text-xs mb-2 text-gray-500 md:text-sm lg:text-base xl:text-lg xl:mb-4">Min Price</p>

              <input
                type="number"
                name="min"
                value={filters.priceRange.min}
                onChange={handlePriceRangeChange}
                className="w-full md:w-full lg:full xl:w-auto  border rounded px-2 py-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"

              />
            </div>
            <div className="w-full">
            <p className="text-xs mb-2 text-gray-500 md:text-sm lg:text-base xl:text-lg xl:mb-4">Max Price</p>

              <input
                type="number"
                name="max"
                value={filters.priceRange.max}
                onChange={handlePriceRangeChange}
                className="w-full md:w-full lg:full xl:w-auto border rounded px-2 py-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4"

              />
            </div>
          </div>
        </label>
        <div className="mt-4">
        <button onClick={applyFilters} className="w-full md:w-full lg:full xl:w-auto bg-[#00B4D8] text-white px-4 py-2 rounded mr-2 md:mr-4 lg:px-6 lg:py-3">
            Apply Filters
          </button>
          <button onClick={resetFilters} className="w-full md:w-full lg:full xl:w-auto text-gray-500  md:ml-8 md:py-2 rounded md:mr-4 lg:mr-8">

            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
