import NestedCheckListItems from "./NestedCheckListItems";

const NestedCheckList = () => {
  const checkListData = [
    {
      name: 'Fruit',
      id: 1,
      children: [
        {
          name: "Citrus",
          id: 1,
          children: [
            {
              name: "Orange",
              id:1
            },
            {
              name: "Lemon",
              id:2
            },
          ]
        },
        {
          name: "Banana",
          id: 2,
        },
        {
          name: "Grape",
          id: 3,
        },
      ]
    },
    {
      name: "Animals",
      id: 2,
      children: [
        {
          name: "Dog",
          id: 1,
        },
        {
          name: "Cat",
          id: 2,
        },
        {
          name: "Bird",
          id: 3,
        },
      ]
    },
    {
      name: "Vegetables",
      id: 3,
      children: [
        {
          name: "Carrot",
          id: 1,
        },
        {
          name: "Broccoli",
          id: 2,
        },
        {
          name: "Spinach",
          id: 3,
        },
      ]
    },
  ]
  return (
    <NestedCheckListItems data={checkListData} className="text-start" />
  );
};

export default NestedCheckList;
