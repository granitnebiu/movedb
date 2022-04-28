import React from "react";

export default function HeaderIcon({ IconHero, title }) {
  return (
    <div className="mx-4 flex flex-col hover:cursor-pointer hover:text-white active:text-red-400 lg:mx-6">
      <IconHero className="h-8" />
      <p className="my-2">{title}</p>
    </div>
  );
}
