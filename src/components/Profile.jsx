import React from "react";

const Profile = ({ data, setData }) => {
  const { name, email } = data;

  const handleOnChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your name"
          className="border m-2 border-black"
          value={name}
          onChange={(e) => handleOnChange("name", e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          className="border m-2 border-black"
          value={email}
          onChange={(e) => handleOnChange("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default Profile;
