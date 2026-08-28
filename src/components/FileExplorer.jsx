import React, { useState } from "react";
import { fileData } from "./data/explorerData";

const List = ({ data, setData }) => {
  const [isExpanded, setIsExpanded] = useState({});
  const handleExpand = (item) => {
    setIsExpanded((prev) => ({
      ...prev,
      [item.name]: !prev[item.name],
    }));
  };

  const handleAddNode = (item) => {
    const nodeName = prompt("Enter name : ");
    const newNode = {
      id: Date.now(),
      name: nodeName,
      isFolder: false,
    };

    const addNodeAndReturnFullTree = (nodes) => {
      return nodes.map((node) => {
        if (node.id === item.id) {
          return {
            ...node,
            children: [...node.children, newNode],
          };
        }
        if (node.children) {
          return {
            ...node,
            children: addNodeAndReturnFullTree(node.children),
          };
        }
        return node;
      });
    };

    setData((prev) => addNodeAndReturnFullTree(prev));
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
            {item.isFolder && (
              <span
                onClick={() => handleAddNode(item)}
                className="cursor-pointer"
              >
                ➕
              </span>
            )}
            {isExpanded?.[item.name] && item?.children && (
              <List data={item.children} setData={setData} />
            )}
          </div>
        );
      })}
    </div>
  );
};

const FileExplorer = () => {
  const [data, setData] = useState(fileData);
  return <List data={data} setData={setData} />;
};

export default FileExplorer;
