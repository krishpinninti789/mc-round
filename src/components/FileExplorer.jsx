import React, { useState } from "react";
import { fileData } from "./data/explorerData";

const List = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const handleExpand = (item) => {
    setIsExpanded((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };
  return (
    <div className="flex flex-col items-start text-start mx-6 p-3">
      {data.map((item) => {
        return (
          <div className="m-2" key={item.id}>
            {item.isFolder ? (
              !isExpanded?.[item.name] ? (
                <span>📁</span>
              ) : (
                <span>📂</span>
              )
            ) : (
              <span>🖺</span>
            )}

            <span
              className="cursor-pointer bg-gray-200 rounded-lg p-2"
              onClick={() => handleExpand(item)}
            >
              {item.name}
            </span>
            {isExpanded?.[item.name] && item?.children && (
              <List data={item.children} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(fileData);
  return <List data={data} />;
};

export default FileExplorer;
