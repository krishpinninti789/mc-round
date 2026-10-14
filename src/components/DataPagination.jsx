import React, { useState } from "react";
import { pageConfig } from "./data/pageData";

const pageOffSet = 4;

const DataPagination = () => {
  const totalPages = pageConfig.length;
  const [pageNumber, setPageNumber] = useState(1);
  const [pages, setPages] = useState([...Array(totalPages).keys()]);
  const handleSetPageNumber = (index) => {
    setPageNumber(index);
  };
  const pagesMax = 3;
  const start = (pageNumber - 1) * pageOffSet;
  const end = start + pageOffSet;

  const pageEnd = Math.ceil(pageConfig.length / pageOffSet);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex m-4 h-full">
        {pageConfig.slice(start, end).map((item) => (
          <span className="h-[500px] w-[400px] m-3 bg-red-500">
            {item.label}
          </span>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-400 p-3 rounded-lg">Prev</button>
        {pages.slice(0, pageEnd).map((index) => (
          <button
            key={index}
            className={`border border-black px-3 py-1 rounded-md cursor-pointer ${index + 1 === pageNumber && "bg-blue-500 text-white"}`}
            onClick={() => handleSetPageNumber(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button className="bg-blue-400 p-3 rounded-lg">Next</button>
      </div>
    </div>
  );
};

export default DataPagination;
