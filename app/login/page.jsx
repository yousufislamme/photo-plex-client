"use client";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { usePhotoContext } from "../Context/PhotoContext";

const Login = () => {
  const { user, handleGoogleSign } = usePhotoContext();

  const { emailVerified, displayName, photoURL } = user;
  return (
    <div className="px-24 bg-base-200">
      <div className="hero min-h-screen  ">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercita tione quasi.
            </p>
            <h2>user : {user.displayName}</h2>
            <h2>email : {user.email}</h2>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>

              <div className=" flex justify-around">
                <div
                  className="flex items-center gap-2"
                  onClick={handleGoogleSign}
                >
                  <span>
                    {" "}
                    <FcGoogle className="text-4xl" />
                  </span>
                </div>
                <button className="flex items-center gap-2">
                  <span>
                    {" "}
                    <FaFacebook className="text-4xl text-blue-700" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
