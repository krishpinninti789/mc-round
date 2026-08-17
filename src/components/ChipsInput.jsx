import React, { useEffect, useState } from "react";

const ChipsInput = () => {
  const [chips, setChips] = useState(() => {
    const data = localStorage.getItem("chips");
    return data ? JSON.parse(data) : [];
  });
  const [inputValue, setInputValue] = useState("");

  // Load chips from localStorage
  useEffect(() => {
    const data = localStorage.getItem("chips");

    if (data) {
      setChips(JSON.parse(data));
    }
  }, []);

  // Keep localStorage in sync with chips state
  useEffect(() => {
    localStorage.setItem("chips", JSON.stringify(chips));
  }, [chips]);

  const handleAddToChip = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setChips((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeItem = (indexToRemove) => {
    setChips((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input
        className="p-3 border border-black rounded-md m-3"
        placeholder="Enter text here"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => handleAddToChip(e)}
        value={inputValue}
      />
      {chips && chips.length > 0 && (
        <>
          {chips.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-gray-500 m-3 rounded-lg p-3 w-1/2 flex items-center justify-between"
              >
                {item}
                <button
                  className="cursor-pointer"
                  onClick={() => removeItem(index)}
                >
                  ❌
                </button>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ChipsInput;
