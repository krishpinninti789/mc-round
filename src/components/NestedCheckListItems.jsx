const NestedCheckListItems = ({ data,className }) => {
  return (
    <div>
      {
        data.map((item) => (
          <div key={item.id} className="pl-5 items-start flex flex-col">
            <div className="flex flex-row p-1 gap-x-2">
              <input type="checkbox" id={item.id} />
              <label htmlFor={item.id}>{item.name}</label>
            </div>
            {item.children && <NestedCheckListItems data={item.children} />}
          </div>
        ))
      }
    </div>
  );
};

export default NestedCheckListItems;
