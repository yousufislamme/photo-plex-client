"use client";

import React from "react";
import { usePhotoContext } from "../Context/PhotoContext";

const Skeleton = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-3 place-content-center  gap-8 py-8">
      {[...Array(12)].map((_, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 w-auto h-[460px] md:h-[600px] ">
          <div className="skeleton h-[600px] w-full"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-28"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
