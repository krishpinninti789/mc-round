import { useState } from "react";
import { tabsConfig } from "./data/tabsConfig";

const TabForm = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [data, setData] = useState({
    name: "kittu",
    email: "kittu@gmail.com",
    interests: ["coding", "music"],
    theme: "dark",
  });

  const handleTab = (index) => {
    setCurrentTabIndex(index);
  };

  const ActiveComponent = tabsConfig[currentTabIndex].component;

  return (
    <div className="flex flex-col">
      <div className="flex p-2 gap-x-3">
        {tabsConfig.map((tab, index) => (
          <div key={index}>
            <button
              onClick={() => handleTab(index)}
              className="bg-blue-500 rounded-md p-3 text-white"
            >
              {tab.tabName}
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start">
        <ActiveComponent data={data} setData={setData} />
      </div>
    </div>
  );
};

export default TabForm;
