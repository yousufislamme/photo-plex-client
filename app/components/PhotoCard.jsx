"use client"
import React from "react";
import Link from "next/link";

const PhotoCard = ({ item }) => {
  const { id, url, alt, src, photographer } = item;
  // console.log(item);


  return (
    <Link href={`/photos/${item.id}`}>
      <div className="w-96 h-auto">
        <img
          className="rounded-md h-[460px] w-auto md:h-[600px] "
          src={src.portrait}
          alt=""
        />
      </div>
      <div className="mx-2">
        <h1 className="text-xl font-semibold">{alt.slice(0, 30)}..</h1>
        <div className="flex justify-between m-2">
          <div className="space-x-2">
            <a href={src} className="btn btn-outline btn-sm btn-primary">
              Download
            </a>
              <a href={src} className="btn  btn-sm btn-warning">
              Add to Fav
            </a>
          </div>
          <div>
            <h2 className="text-sm">{photographer}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PhotoCard;
