import React, { useEffect, useState } from "react";

const PAGE_SIZE = 10;

const Pagination = () => {
  const [products, setProducts] = useState([]);

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

  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / PAGE_SIZE);

  return (
    <div>
      Pagination
      <h1 className="flex gap-x-2 justify-center">
        {[...Array(totalPages).keys()].map((index) => (
          <button
            key={index}
            className="border border-black px-3 py-1 rounded-md cursor-pointer"
          >
            {index + 1}
          </button>
        ))}
      </h1>
      <div className="grid gap-3 m-3 grid-cols-5">
        {products.map((product) => (
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
