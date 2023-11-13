import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styles from "../styles/styles";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import ProductLoading from "../components/ProductLoading";
import Header from "../components/Layout/Header";
import VillajaFooter from "../components/VillajaFooter/VillajaFooter";
import FilterSidebar from "../components/FilterSidebar";

const AllProducts = () => {
  const [data, setData] = useState([]);
  const { allProducts } = useSelector((state) => state.products);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 5000000 },
    category: "",
  });
  const [appliedFilters, setAppliedFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    if (allProducts && allProducts?.length > 0) {
      setData(allProducts);
      setLoading(false);
    }
  }, [allProducts]);

  // Filter products based on the selected filters
  const filteredData = data.filter((product) => {
    const withinPriceRange =
      product.discountPrice >= filters.priceRange.min &&
      product.discountPrice <= filters.priceRange.max;
    const matchesCategory =
      !filters.category || product.category === filters.category;

    return withinPriceRange && matchesCategory;
  });

  // Calculate the index range for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredData.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Calculate the number of pages
  const totalPages = Math.ceil(filteredData.length / productsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const applyFilters = () => {
    setAppliedFilters(true);
    setCurrentPage(1); // Reset to the first page when filters are applied
  };

  const resetFilters = () => {
    setFilters({
      priceRange: { min: 0, max: 100000 },
      category: "",
    });
    setAppliedFilters(false);
    setCurrentPage(1); // Reset to the first page when filters are reset
  };

  return (
    <div>
      <Header />
      <div className={`${styles.section} mt-16`}>
        {/* <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          applyFilters={applyFilters}
          resetFilters={resetFilters}
        /> */}
        <div className="sm:ml-8">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
            {loading ? (
              <p className="text-center">
                <ProductLoading />
              </p>
            ) : (
              <>
                {appliedFilters
                  ? currentProducts.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))
                  : currentProducts.map((product, index) => (
                      <ProductCard data={product} key={index} />
                    ))}
              </>
            )}
          </div>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Previous
            </button>
            <div>
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={indexOfLastProduct >= filteredData.length}
              className="bg-gray-300 px-4 py-2 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>
      <VillajaFooter />
    </div>
  );
};

export default AllProducts;