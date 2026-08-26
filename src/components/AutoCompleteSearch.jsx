import React, { useEffect, useState } from "react";

const AutoCompleteSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      setSearchResults(cache[input]);
      return;
    }
    const data = await fetch(
      `https://dummyjson.com/products/search?q=${input}`,
    );

    const json = await data.json();
    setSearchResults(json.products);
    setCache((prev) => ({ ...prev, [input]: json.products }));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="flex flex-col w-1/2 items-center">
      AutoCompleteSearch
      <input
        placeholder="Enter text"
        className="border border-black p-3 rounded-md w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShow(true)}
        onBlur={() => setShow(false)}
      />
      {show && (
        <div className="flex border border-black p-3 flex-col items-start w-full">
          {searchResults.map((result, index) => (
            <h1 key={index} className="hover:bg-gray-300">
              {result.title}
            </h1>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
