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

  const [errors, setErrors] = useState({});

  const handleTab = (index) => {
    setCurrentTabIndex(index);
  };

  const handlePrev = (index) => {
    setCurrentTabIndex(index - 1);
  };

  const handleNext = (index) => {
    const anyError = tabsConfig[currentTabIndex].validate(data);

    setErrors(anyError);

    if (Object.keys(anyError).length === 0) {
      setCurrentTabIndex(index + 1);
    }
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
        <ActiveComponent data={data} setData={setData} errors={errors} />
      </div>
      <div className="flex gap-x-2">
        {currentTabIndex > 0 && (
          <button
            className="bg-blue-500 rounded-md p-3 text-white"
            onClick={() => handlePrev(currentTabIndex)}
          >
            Prev
          </button>
        )}
        {currentTabIndex < tabsConfig.length - 1 && (
          <button
            className="bg-blue-500 rounded-md p-3 text-white"
            onClick={() => handleNext(currentTabIndex)}
          >
            Next
          </button>
        )}
      </div>
      {currentTabIndex === tabsConfig.length - 1 && (
        <button className="bg-green-500 rounded-md p-3 text-white">
          Submit
        </button>
      )}
    </div>
  );
};

export default TabForm;
