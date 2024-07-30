import Image from "next/image";
import { Inter } from "next/font/google";
import Input from "@/components/input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1 className="text-5xl">UserFind Applocation</h1>
      <Input />
      <p>list</p>
    </main>
  );
}
