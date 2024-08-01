import React, { useState } from "react";

const Input = ({ handleChange }) => {
  // const [searchValue, setSearchValue] = useState("");
  const changeValue = (e) => {
    handleChange(e.target.value);
  };
  return (
    <div className=" flex flex-row  justify-center gap-4 py-10">
      <input
        className="border border-gray-400 rounded-md w-60 h-10 "
        type="text"
        onChange={changeValue}
      />
      {/* <p className="text-xl flex-row">searchValue:{searchValue}</p>
      <button>Clear</button> */}
    </div>
  );
};

export default Input;
