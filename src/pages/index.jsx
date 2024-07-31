import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";
import Users from "@/components/card";
import UserCard from "@/components/user-card";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const profiles = [
  {
    id: 1,
    firstName: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Springfield, IL",
    phone: "99011090",
    jobTitle: "Software Engineer",
    imageUrl: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    firstName: "Jane Smith",
    age: 30,
    email: "jane.smith@example.com",
    address: "456 Oak St, Springfield, IL",
    phone: "99011091",
    jobTitle: "Project Manager",
    imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    firstName: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    address: "789 Pine St, Springfield, IL",
    phone: "99011092",
    jobTitle: "UX Designer",
    imageUrl: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    firstName: "Bob Brown",
    age: 35,
    email: "bob.brown@example.com",
    address: "101 Maple St, Springfield, IL",
    phone: "99011093",
    jobTitle: "Product Owner",
    imageUrl: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    firstName: "Charlie Davis",
    age: 22,
    email: "charlie.davis@example.com",
    address: "202 Elm St, Springfield, IL",
    phone: "99011094",
    jobTitle: "Marketing Specialist",
    imageUrl: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

export default function Home() {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState(profiles);

  const handleChange = (text) => {
    setSearchValue(text);

    const finder = profiles.filter((user) =>
      user.firstName.toLowerCase().includes(text.toLowerCase())
    );

    setUsers(finder);
  };
  const handleDelete = (index) => {
    // console.log("id", id);
    // const deleted = profiles.splice(4, 1);
    // console.log(deleted);

    // splice() ашиглан элементийг indexToDelete-ээс нэгээр устгах
    // let deleted =
    setUsers(profiles.splice(index, 1));
    // setUsers(deleted);
    console.log("index", index, users); // Гаралт: [1, 2, 4, 5]
  };

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-5xl flex justify-center">UserFind Applocation</h1>
      <div className="flex flex-col gap-5 mt-6">
        <Input handleChange={handleChange} />
        <p className="flex justify-center">Search value : {searchValue}</p>
        <button
          className="border rounded-lg bg-slate-400"
          onClick={() => {
            setUsers(null);
          }}
        >
          Clear
        </button>
        <button
          className="border rounded-lg bg-slate-400"
          onClick={() => {
            setUsers(profiles);
          }}
        >
          View
        </button>
        {users?.map((user, index) => {
          return (
            <UserCard
              userImg={user.imageUrl}
              firstName={user.firstName}
              handleDelete={handleDelete}
              index={index}
            />
          );
        })}
        {!users && <p>hooson</p>}
      </div>
    </main>
  );
}
