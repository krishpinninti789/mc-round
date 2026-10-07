import React, { useEffect, useState } from "react";
import { GridData } from "./data/gridItems";

const GridGame = () => {
  const [gridData, setGridData] = useState(GridData);
  const [clickedOrder, setClickedOrder] = useState([]);
  const handleBlockClick = (itemId) => {
    setClickedOrder((prev) => [...prev, itemId]);
    const isGridAlreadyActive = gridData.some(
      (item) => item.id === itemId && item.isClicked,
    );

    if (isGridAlreadyActive) {
      return;
    }
    setGridData((prev) =>
      prev.map((item) =>
        item.id === itemId && !item.isClicked
          ? { ...item, isClicked: true }
          : item,
      ),
    );
  };
  useEffect(() => {
    if (clickedOrder.length !== GridData.length) return;
    clickedOrder.forEach((id, index) => {
      setTimeout(() => {
        setGridData((prev) =>
          prev.map((item) =>
            item.id === id ? { ...item, isClicked: false } : item,
          ),
        );
      }, index * 500);
    });
  }, [clickedOrder]);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" border border-black p-2">
        <div className="grid grid-cols-3 gap-2">
          {gridData.map((item) => (
            <span
              key={item.id}
              id="blocks"
              className={`border border-black h-[200px] w-[200px] cursor-pointer ${item.isClicked ? "bg-green-500" : ""} `}
              onClick={() => handleBlockClick(item.id)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GridGame;
