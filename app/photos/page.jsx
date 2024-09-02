"use client";
import React, { useEffect, useState } from "react";
import PhotoCard from "../components/PhotoCard";
import { usePhotoContext } from "../Context/PhotoContext";
import Skeleton from "../components/Skeleton";

const Photos = () => {
  const {
    photos,
    loading,
    query,
    setQuery,
    fetchPhotos,
    handleSearchSubmit,
    handleSearchInputChange,
  } = usePhotoContext();

  return (
    <div className=" px-10 py-8">
      <div className="flex justify-center">
        <ul className="menu menu-horizontal bg-base-200 rounded">
          <li className="bg-slate-950 rounded-md text-slate-50">
            <a>Photo</a>
          </li>
          <li>
            <button>Item 2</button>
          </li>
          <li>
            <a>Item 3</a>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      {/* img card section */}
      <div className="flex justify-between mt-10">
        <h2 className="text-2xl font-semibold">Free Stock Photos</h2>
        <details className="dropdown">
          <summary className="m-1 btn">Trending</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box out w-52">
            <li>
              <a>New</a>
            </li>
            <li>
              <a>Modern</a>
            </li>
          </ul>
        </details>
      </div>

      {/* Loading indicator */}
      {loading && <Skeleton />}

      <div className="grid grid-cols-1 md:grid-cols-3 place-content-center items-center  gap-8 py-8">
        {/* <Skeleton /> */}
        {photos.map((item) => (
          <PhotoCard item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Photos;
