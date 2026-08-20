import React, { useState, useRef, useEffect } from "react";

export const OTP_INPUT_SIZE = 4;

const OTPInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_INPUT_SIZE).fill(""));
  const inputRefArr = useRef([]);

  const handleOnInput = (value, index) => {
    if (isNaN(value)) return;

    const newArr = [...inputArr];
    newArr[index] = value.trim().slice(-1);
    setInputArr(newArr);
    value && inputRefArr.current[index + 1]?.focus();
  };

  const handleBackClick = (e, index) => {
    if (e.key == "Backspace") {
      !e.target.value && inputRefArr.current[index - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefArr.current[0]?.focus();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-2xl">Validate OTP</h1>
      <div className="m-4">
        {inputArr.map((input, index) => {
          return (
            <input
              value={inputArr[index]}
              key={index}
              ref={(input) => {
                inputRefArr.current[index] = input;
              }}
              className="border border-black h-20 w-20 text-center text-2xl"
              onChange={(e) => handleOnInput(e.target.value, index)}
              onKeyDown={(e) => handleBackClick(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OTPInput;
