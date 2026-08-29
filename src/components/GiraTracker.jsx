import React, { useState } from "react";
import { jiraData } from "./data/giraData";

const GiraTracker = () => {
  const [tasks, setTasks] = useState(jiraData);
  const [inputTitle, setInputTitle] = useState("");

  const handleAddTask = () => {
    const taskName = prompt("Enter task: ");
    const priority = prompt("Enter priority: ");
    const newTask = {
      id: Date.now(),
      title: taskName,
      status: "todo",
      priority: priority,
    };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdatePriority = (id) => {
    const updatedPriority = prompt("Enter priority you wanted to update:");

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, priority: updatedPriority } : task,
      ),
    );
  };

  const handleEditTaskTitle = (id, title) => {
    const updatedTitle = prompt("Enter the title", title);

    setTasks((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, title: updatedTitle } : item,
      ),
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(inputTitle.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-bold text-gray-900">Jira Tracker</h1>
        <button
          className="p-3 text-white font-bold bg-blue-700 rounded-lg mb-3 cursor-pointer"
          onClick={handleAddTask}
        >
          Create task
        </button>
        <input
          placeholder="Search tasks here: "
          className="border border-gray-400 p-3 mx-3 rounded-lg"
          value={inputTitle}
          onChange={(e) => setInputTitle(e.target.value)}
        />

        <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50 text-left">
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  S.No
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Task
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Priority
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Priority Action
                </th>
                <th className="px-6 py-4 text-sm font-semibold text-gray-600">
                  Edit
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTasks.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                >
                  <td className="px-6 py-4 text-sm text-gray-500">{item.id}</td>

                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {item.title}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : item.status === "in-progress"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-md px-2 py-1 text-xs font-semibold ${
                        item.priority === "p0"
                          ? "bg-red-100 text-red-700"
                          : item.priority === "p1"
                            ? "bg-orange-100 text-orange-700"
                            : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {item.priority.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="bg-orange-400 p-2 rounded-lg text-white text-xs cursor-pointer"
                      onClick={() => handleUpdatePriority(item.id)}
                    >
                      Update priority
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="bg-green-700 p-2 rounded-lg text-white text-xs cursor-pointer"
                      onClick={() => handleEditTaskTitle(item.id, item.title)}
                    >
                      Edit task Title
                    </button>
                  </td>
                  <td>
                    {" "}
                    <button
                      className="bg-red-700 p-2 rounded-lg text-white text-xs cursor-pointer"
                      onClick={() => handleDeleteTask(item.id)}
                    >
                      Delete task
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GiraTracker;
