import NestedCheckListItems from "./NestedCheckListItems";

export const checkListData = [
  {
    name: "Fruit",
    id: 1,
    children: [
      {
        name: "Citrus",
        id: 2,
        children: [
          {
            name: "Orange",
            id: 3,
          },
          {
            name: "Lemon",
            id: 4,
          },
        ],
      },
      {
        name: "Banana",
        id: 5,
      },
      {
        name: "Grape",
        id: 6,
      },
    ],
  },
  {
    name: "Animals",
    id: 7,
    children: [
      {
        name: "Dog",
        id: 8,
      },
      {
        name: "Cat",
        id: 9,
      },
      {
        name: "Bird",
        id: 10,
      },
    ],
  },
  {
    name: "Vegetables",
    id: 11,
    children: [
      {
        name: "Carrot",
        id: 12,
      },
      {
        name: "Broccoli",
        id: 13,
      },
      {
        name: "Spinach",
        id: 14,
      },
    ],
  },
];

const NestedCheckList = ({ checked, setChecked }) => {
  return (
    <NestedCheckListItems
      data={checkListData}
      checked={checked}
      setChecked={setChecked}
    />
  );
};

export default NestedCheckList;
