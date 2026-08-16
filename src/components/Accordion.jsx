import React, { useState } from "react";
import { accordionData } from "./data/acc-data";

const Accordion = () => {
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      {accordionData.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className="bg-gray-500 rounded-md w-1/2 flex m-3 items-start justify-between "
          >
            <div className="flex flex-col">
              <h1>{item.title}</h1>
              {isOpen && <span>{item.discription}</span>}
            </div>
            <button
              className="cursor-pointer"
              onClick={() => {
                setActiveIndex(isOpen ? null : index);
              }}
            >
              {isOpen ? <>⬆️</> : <>⬇️</>}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
