import Image from "next/image";
import React from "react";
import HeaderIcon from "@/HeaderIcon";
import { HomeIcon, UserIcon, PhoneIcon, InformationCircleIcon } from "@heroicons/react/solid";

export default function Header() {
  return (
    <div className="flex select-none flex-col items-center justify-between bg-gray-700 p-6 text-gray-200 sm:flex-row">
      <div className="flex uppercase">
        <HeaderIcon IconHero={HomeIcon} title="Home" />
        <HeaderIcon IconHero={UserIcon} title="Account" />
        <HeaderIcon IconHero={PhoneIcon} title="Contact" />
        <HeaderIcon IconHero={InformationCircleIcon} title="About" />
      </div>
      <Image
        className="cursor-pointer active:brightness-110 "
        width={100}
        height={100}
        alt=""
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
      />
    </div>
  );
}
