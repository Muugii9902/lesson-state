import React from "react";

const UserCard = ({ userImg, firstName }) => {
  return (
    <div className="p-5 flex gap-4 items-center">
      <div className="flex gap-5 items-center">
        <img className="w-10 h-10 rounded-full " src={userImg} alt="" />
        <h1>{firstName}</h1>
      </div>
    </div>
  );
};

export default UserCard;
