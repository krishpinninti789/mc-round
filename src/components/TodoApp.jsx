import React, { useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoItem, setTodoItem] = useState("");
  const [checked, setChecked] = useState([]);

  const handleAddTodo = () => {
    if (!todoItem.trim()) return;

    setTodoList((prev) => [...prev, todoItem]);
    setTodoItem("");
  };

  const handleDeleteTodo = (todoIndex) => {
    setTodoList((prev) => prev.filter((_, index) => index !== todoIndex));

    setChecked((prev) =>
      prev
        .filter((index) => index !== todoIndex)
        .map((index) => (index > todoIndex ? index - 1 : index)),
    );
  };

  const handleChecked = (index) => {
    setChecked((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-y-3">
      {/* Input */}
      <div className="flex justify-center gap-3">
        <input
          placeholder="Enter todo"
          className="rounded-md border border-black p-3"
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />

        <button
          className="rounded-md bg-blue-500 p-3 text-white"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      {todoList.length > 0 &&
        todoList.map((item, index) => {
          const isChecked = checked.includes(index);

          return (
            <div key={index} className="flex items-center gap-x-3">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => handleChecked(index)}
              />

              <label className={isChecked ? "line-through bg-red-400" : ""}>
                {item}
              </label>

              <button
                className="rounded-md bg-red-500 p-3 text-white"
                onClick={() => handleDeleteTodo(index)}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default TodoApp;
