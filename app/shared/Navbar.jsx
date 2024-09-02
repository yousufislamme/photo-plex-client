"use client";
import React from "react";
import { FcStackOfPhotos } from "react-icons/fc";
import { IoMdPhotos } from "react-icons/io";
import Link from "next/link";
import { usePhotoContext } from "../Context/PhotoContext";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, handleGoogleSign, handleSingOut } = usePhotoContext();
  const { emailVerified, displayName, photoURL } = user;
  const router = useRouter();

  if (user.emailVerified == true) {
    router.push("/"); // Redirecting to /cart route
  }
  return (
    <div>
      <div className="navbar bg-transparent px-[10px] md:px-[50px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>

          <Link href={"/"} className="btn btn-ghost text-xl">
            <span>
              <IoMdPhotos className="text-3xl" />
            </span>
            Photo Plex{" "}
          </Link>
        </div>

        <div className="hidden">
          <div className="dropdown hidden ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost m-1 bg-base-300"
            >
              Photos
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Video</a>
              </li>
              <li>
                <a>Picture</a>
              </li>
            </ul>
          </div>
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-64 md:w-96"
            />
          </div>
        </div>
      
        <div className="navbar-end gap-4 ">
          <button className="btn btn-ghost btn-circle ">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          {user.emailVerified === true ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="" src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a href="" onClick={handleSingOut}>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <ul className="menu menu-horizontal px-1 font-semibold text-md">
           
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
          )}

          <div className="hidden md:block">
            <a className="btn bg-blue-600 text-white  ">Upload</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
