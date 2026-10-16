import React, { useState } from "react";

const VirtualizedList = ({ data, height, width, itemHeight }) => {
  const [indices, setIndices] = useState([0, Math.floor(height / itemHeight)]);

  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newStart = Math.floor(scrollTop / itemHeight);
    const newEnd = newStart + Math.floor(height / itemHeight);
    setIndices([newStart, newEnd]);
  };
  console.log(indices);

  return (
    <div
      className="container relative overflow-y-auto"
      onScroll={(e) => handleScroll(e)}
      style={{ height: height, width: width }}
    >
      <div
        style={{
          height: data.length * itemHeight,
          width: 300,
        }}
        className="bg-green-500"
      >
        <div style={{ top: itemHeight * indices[0], position: "absolute" }}>
          {data.slice(indices[0], indices[1]).map((item, index) => (
            <span
              key={index}
              className="bg-orange-500 m-2 p-4 text-center justify-center flex items-center"
              style={{ height: itemHeight }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualizedList;
