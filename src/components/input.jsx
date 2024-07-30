import React, { useState } from "react";

const Input = () => {
  const [searchValue, setsearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setsearchValue(e.target.value);
  };
  return (
    <div>
      <input
        className="border border-gray-400"
        type="text"
        onChange={handleChange}
      />
      <p>searchValue:{handleChange}</p>
    </div>
  );
};

export default Input;
