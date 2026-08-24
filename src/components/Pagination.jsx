import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchProducts = async () => {
    try {
      const productsResponse = await fetch(
        "https://dummyjson.com/products?limit=200",
      );
      const data = await productsResponse.json();
      setProducts(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSetPageNumber = (index) => {
    setCurrentPage(index);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start = currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  return (
    <div>
      Pagination
      <h1 className="flex gap-x-2 justify-center">
        <button
          className="border border-black px-3 py-1 rounded-md cursor-pointer"
          disabled={currentPage <= 1}
          onClick={handlePrev}
        >
          ⬅️
        </button>
        {[...Array(totalPages).keys()].map((index) => (
          <button
            key={index}
            className={`border border-black px-3 py-1 rounded-md cursor-pointer ${index + 1 === currentPage && "bg-blue-500 text-white"}`}
            onClick={() => handleSetPageNumber(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="border border-black px-3 py-1 rounded-md cursor-pointer"
          disabled={currentPage > totalPages}
          onClick={handleNext}
        >
          ➡️
        </button>
      </h1>
      <div className="grid gap-3 m-3 grid-cols-5">
        {products.slice(start, end).map((product) => (
          <div key={product.id} className="border border-black p-3 rounded-md ">
            <img src={product.thumbnail} alt="" />
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
