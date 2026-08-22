import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleOnChange = (e) => {
    setData((prev) => ({
      ...prev,
      theme: e.target.value,
    }));
  };

  return (
    <div className="flex flex-col p-2">
      <h3>Settings</h3>

      <label>
        <input
          type="radio"
          value="dark"
          checked={theme === "dark"}
          onChange={handleOnChange}
        />
        Dark Mode
      </label>
      <label>
        <input
          type="radio"
          value="light"
          checked={theme === "light"}
          onChange={handleOnChange}
        />
        Light Mode
      </label>
    </div>
  );
};

export default Settings;
