const NestedCheckListItems = ({ data, checked, setChecked }) => {
  const handleChange = (e, id) => {
    setChecked((prev) => {
      const newState = { ...prev, [id]: e.target.checked };
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
              onChange={(e) => handleChange(e, item.id)}
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
