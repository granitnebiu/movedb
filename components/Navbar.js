import requests from "@/utils/requests";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex select-none justify-center bg-gray-600 px-16 text-xl text-gray-200 lg:text-2xl">
      {Object.entries(requests).map(([key, { title, url }]) => (
        <h2
          onClick={() => router.push(`?genre=${key}`)}
          className="cursor-pointer p-6 hover:text-white active:text-red-400"
          key={key}
        >
          {title}
        </h2>
      ))}
    </div>
  );
}
