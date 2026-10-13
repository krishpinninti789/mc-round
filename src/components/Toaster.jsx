import React, { useRef, useState } from "react";

const toastConfig = [
  {
    label: "Success",
    type: "success",
  },
  {
    label: "Error",
    type: "error",
  },
  {
    label: "Info",
    type: "info",
  },
  {
    label: "Warning",
    type: "warning",
  },
];

const Toaster = () => {
  const [toasts, setToasts] = useState([]);
  const timerRef = useRef({});

  const handleAddToast = (message, type) => {
    const id = new Date().getTime();
    const newToast = { id, message, type };
    setToasts((prev) => [...prev, newToast]);

    timerRef.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((item) => item.id !== id));
    }, 4000);
  };

  const handleRemoveToast = (id) => {
    clearTimeout(timerRef.current[id]);
    delete timerRef.current[id];
    const newToasts = toasts.filter((item) => item.id !== id);
    setToasts(newToasts);
  };

  console.log(toasts);
  console.log(timerRef);

  return (
    <div className="relative flex h-full justify-between">
      <div className="flex gap-x-2">
        {toastConfig.map((item) => {
          return (
            <button
              key={item.type}
              className={`toastBtn ${item.type}`}
              onClick={() => handleAddToast(item.label, item.type)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="fixed right-5 top-5 z-50 flex flex-col gap-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`${toast.type} rounded-lg px-5 py-3 text-white shadow-lg flex justify-between`}
          >
            <h1>{toast.message}!</h1>
            <button onClick={() => handleRemoveToast(toast.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Toaster;
