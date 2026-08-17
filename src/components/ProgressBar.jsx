import React from "react";

const ProgressBar = (props) => {
  const { progress } = props;

  return (
    <div className="border border-black rounded-md flex m-3 h-10 w-100">
      <div
        className="border border-black rounded-md h-10 bg-green-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
