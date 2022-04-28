import React from "react";
import Card from "@/Card";

export default function Results({ results }) {
  return (
    <div className="select-none grid-cols-2 bg-gray-700 text-gray-200 sm:grid lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {results.map((resultCard) => (
        <div key={resultCard.id}>
          <Card resultCard={resultCard} />
        </div>
      ))}
    </div>
  );
}
