import React, { useState } from "react";

const Input = () => {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };
  return (
    <div className=" flex flex-row  justify-center gap-4 py-10">
      <input
        className="border border-gray-400 "
        type="text"
        onChange={handleChange}
      />
      <p className="text-xl flex-row">searchValue:{searchValue}</p>
    </div>
  );
};

export default Input;
