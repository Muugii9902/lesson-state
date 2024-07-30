import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";
import Users from "@/components/card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl flex justify-center">UserFind Applocation</h1>
      <Input />
      <p className="text-center text-2xl">list</p>
      <Users />
    </main>
  );
}
