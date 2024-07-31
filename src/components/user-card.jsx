import React, { useState } from "react";

const UserCard = ({ userImg, firstName, id, handleDelete, index }) => {
  return (
    <div className="p-5 flex gap-4 items-center">
      <div className="flex gap-5 items-center">
        <img className="w-10 h-10 rounded-full " src={userImg} alt="" />
        <h1>{firstName}</h1>
        <button
          className="border rounded-lg bg-red-600 p-2"
          onClick={() => {
            handleDelete(index, id);
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default UserCard;
