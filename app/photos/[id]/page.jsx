"use client";

import NavigationHeader from "@/app/components/NavigationHeader";
import React, { useEffect, useState } from "react";

const SinglePhoto = ({ params }) => {
  const photoId = params.id;
  // console.log(photoId);
  // data fetch
  const [photos, setPhotos] = useState([]);
  const apiKey = "ASYUoMdBCN15pFc1skFWKGV45q2nOW00BjBPBX2LFcGt4uTEKaFGiIYP";

  useEffect(() => {
    fetch(`https://api.pexels.com/v1/photos/${photoId}`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data);
      })
      .catch((error) => console.error("Error fetching photos:", error));
  }, []);

  const { id, url, alt, src, photographer } = photos;
  console.log(photos);

  const NavButton = [
    {
      id: 1,
      title: "Collect",
      icon: "icon",
    },
    {
      id: 2,
      title: "Liked",
      icon: "icon",
    },
    {
      id: 3,
      title: "Edit",
      icon: "icon",
    },
  ];
  return (
    <div className="h-full px-8 md:px-16   py-4 ">
      {/* <NavigationHeader /> */}
      {/* section nav  */}
      <div className="bg-slate-100 p-2 ">
        {/* warper */}
        <div className="flex justify-between items-center">
          {/* logo   */}
          <div className=" gap-4 items-center hidden md:flex">
            {/* img */}
            <div>
              <div className="avatar ">
                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
            </div>
            {/* img text  */}
            <div>
              <h2>{photographer}</h2>
              <button>Follow</button>
            </div>
          </div>
          {/* logo   */}
          {/* nav button  */}
          <div className="flex gap-8  items-center">
            {NavButton.map(({ id, title }) => (
              <div className="">
                <button className="btn btn-outline">{title} </button>
              </div>
            ))}
            <div>
              <button className="btn btn-active btn-primary">
                {" "}
                Free Download
              </button>
            </div>
          </div>
          {/* nav button  */}
        </div>
      </div>
      {/* end nav  */}

      <div className="h-auto w-full my-8 flex place-content-center">
        <img className="w-96" src={src?.original} alt={alt} />
      </div>
      <div>
        <h2 className="text-xl font-semibold">{alt}</h2>
      </div>
    </div>
  );
};

export default SinglePhoto;
