const userlist = [
  {
    image: "/image/lannister.jpg",
    name: "House Lannister",
    date: "2020.09.10",
  },
  {
    image: "/image/stark.jpg",
    name: "House Stark",
    date: "2019.12.03",
  },
  {
    image: "/image/baratheon.jpg",
    name: "House Baratheon",
    date: "2005.05.30",
  },
  {
    image: "/image/velaryon.jpg",
    name: "House Velaryon",
    date: "2009.12.31",
  },
  {
    image: "/image/targaryen.jpg",
    name: "House Targaryen",
    date: "2010.02.12",
  },
  {
    image: "/image/Tully.jpg",
    name: "House Tully",
    date: "2018.9.05",
  },
];
import React from "react";

const Users = () => {
  return (
    <div className="flex flex-row gap-10 container m-auto py-10">
      {userlist.map((a) => (
        <div className="">
          <h1 className=" flex flex-row justify-center">Zurag</h1>
          <img
            src={a.image}
            alt=""
            className="w-[200px] h-[200px] rounded-2xl "
          />
          <div className="text-gray-700 border-4 w-[200px]h-[200px] border-black rounded-xl">
            <h1 className="text-2xl text-bold text-gray-950 text-center  ">
              Нэр
            </h1>
            {a.name}
          </div>
          <div className="text-gray-70 p-4 border-2 w-[200px]h-[200px]">
            <p>Date</p>
            {a.date}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
