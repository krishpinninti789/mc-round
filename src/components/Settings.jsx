import React from "react";

const Settings = ({ theme }) => {
  return (
    <div className="flex flex-col p-2">
      <h3>Settings</h3>

      <label>
        <input type="radio" name="dark" checked={theme === "dark"} />
        Dark Mode
      </label>
      <label>
        <input type="radio" name="light" checked={theme === "light"} />
        Light Mode
      </label>
    </div>
  );
};

export default Settings;
