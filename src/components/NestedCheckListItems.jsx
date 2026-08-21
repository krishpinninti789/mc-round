import { checkListData } from "./NestedCheckList";

const NestedCheckListItems = ({ data, checked, setChecked }) => {
  const handleChange = (isCheked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isCheked };

      const upDateChild = (node) => {
        node?.children?.forEach((child) => {
          newState[child.id] = isCheked;
          child?.children && upDateChild(child);
        });
      };
      upDateChild(node);

      const verifyNode = (node) => {
        if (!node.children?.length) {
          return newState[node.id] || false;
        }

        const allChildrenChecked = node.children.every((child) =>
          verifyNode(child),
        );
        newState[node.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      checkListData.forEach((node) => verifyNode(node));

      return newState;
    });
  };

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="pl-5 items-start flex flex-col">
          <div className="flex flex-row p-1 gap-x-2">
            <input
              type="checkbox"
              id={item.id}
              checked={checked[item.id] || false}
              onChange={(e) => handleChange(e.target.checked, item)}
            />
            <label htmlFor={item.id}>{item.name}</label>
          </div>
          {item.children && (
            <NestedCheckListItems
              data={item.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default NestedCheckListItems;
