import { useEffect, useRef, useState } from "react";
import { IMG_DATA } from "./data/imageData";

const ImageCaurosal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const interactiveRef = useRef(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    interactiveRef.current = true;
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    interactiveRef.current = true;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (interactiveRef.current) return;
      setCurrentIndex((prev) => (prev + 1) % IMG_DATA.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-x-3 justify-center items-center h-screen w-1/2">
      <button
        className="bg-blue-400 p-2 rounded-md"
        onClick={handlePrev}
        disabled={currentIndex <= 0}
      >
        Prev
      </button>
      {/* Viewport */}
      <div className="h-1/2 w-full overflow-hidden">
        {/* Track */}
        <div
          className="h-full flex duration-500 ease-linear"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {IMG_DATA.map((item) => (
            <img
              src={item.image}
              alt="Carousel image"
              key={item.id}
              className="w-full h-full object-cover shrink-0"
            />
          ))}
        </div>
      </div>
      <button
        className="bg-blue-400 p-2 rounded-md"
        onClick={handleNext}
        disabled={currentIndex >= IMG_DATA.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default ImageCaurosal;
