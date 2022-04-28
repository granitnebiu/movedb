import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Card({ resultCard }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";
  return (
    <div className="cursor-pointer p-3 transition-transform duration-200 hover:text-white active:text-red-400 xl:hover:scale-105">
      <Image
        layout="responsive"
        src={BASE_URL + resultCard.backdrop_path}
        width={200}
        height={100}
        alt={resultCard.title || resultCard.name}
      />
      <div className="p-2">
        <p className="truncate text-lg">{resultCard.overview}</p>
        <h2 className="text-lg font-bold">{resultCard.title || resultCard.name}</h2>
        <p className="flex items-center">
          {resultCard.release_date || resultCard.first_air_date}
          <ThumbUpIcon className="ml-3 mr-1 h-5" />
          {resultCard.vote_count}
        </p>
      </div>
    </div>
  );
}
