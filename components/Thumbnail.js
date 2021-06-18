import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ item }, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";

  return (
    <div
      ref={ref}
      className="p-2 transition duration-200 ease-in-out transform cursor-pointer group sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        height={1080}
        width={1920}
        src={`${BASE_URL}${item.backdrop_path || item.poster_path}` || `${BASE_URL}${item.poster_path}`}
      />
      <div className="p-2">
        <p className="max-w-md truncate">{item.overview}</p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {item.title} {item.original_name}
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {item.media_type && `${item.media_type} ·`} {item.release_date || item.first_air_date} ·
          <ThumbUpIcon className="h-5 mx-2" /> {item.vote_count}
        </p>
      </div>
    </div>
  );
});

export default Thumbnail;
