import React from "react";

const Interests = ({ data, setData }) => {
  const { interests } = data;

  const handleOnChange = (e) => {
    const interests = setData((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((item) => item !== e.target.name),
    }));
  };

  return (
    <div className="flex flex-col p-2">
      <h3>Select your interests</h3>

      <label>
        <input
          type="checkbox"
          value="coding"
          name="coding"
          checked={interests.includes("coding")}
          onChange={(e) => handleOnChange(e)}
        />
        Coding
      </label>

      <label>
        <input
          type="checkbox"
          value="music"
          name="music"
          checked={interests.includes("music")}
          onChange={(e) => handleOnChange(e)}
        />
        Music
      </label>
    </div>
  );
};

export default Interests;
