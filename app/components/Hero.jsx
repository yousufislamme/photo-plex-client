"use client";
import { usePhotoContext } from "@/app/Context/PhotoContext";
import Navbar from "@/app/shared/Navbar";
import React from "react";

const Hero = () => {
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
    <div className="max-w-[1640px] mx-auto">
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content  ">
          <div className="max-w-xl md:max-w-4xl  ">
            <h1 className="mb-5 text-3xl md:text-4xl font-bold text-white">
              Discover top-quality, free stock photos, royalty-free images
              shared by talented creators.
            </h1>
            {/* <div className="mb-5">
              <input
                type="text"
                placeholder="Type here...."
                className="input input-bordered input-md input-primary w-full max-w-md"
              />
            </div>
            <button className="btn btn-primary">Search</button> */}

            <div>
              {/* Search bar */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex justify-center mb-4"
              >
                <input
                  type="text"
                  value={query}
                  onChange={handleSearchInputChange}
                  placeholder="Search for photos..."
                  className="border-2 border-gray-300 w-[60%] px-4 py-2 rounded-md"
                />
                <button
                  type="submit"
                  className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
