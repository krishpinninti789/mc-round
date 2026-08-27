import React, { useState } from "react";
import { fileData } from "./data/explorerData";

const List = ({ data }) => {
  return (
    <div className="flex flex-col items-start text-start mx-6 p-3">
      {data.map((item) => {
        return (
          <div>
            <span>{item.name}</span>
            {item?.children && <List data={item.children} />}
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
