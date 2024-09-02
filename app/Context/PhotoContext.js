"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { appLogin } from "@/firebase.config";

const PhotoContext = createContext();

export const usePhotoContext = () => {
  return useContext(PhotoContext);
};

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const apiKey = "ASYUoMdBCN15pFc1skFWKGV45q2nOW00BjBPBX2LFcGt4uTEKaFGiIYP";
  useEffect(() => {
    if (!query) {
      // Fetch curated photos if no search query
      fetchPhotos("car");
    } else {
      // Fetch photos based on search query
      fetchPhotos(query);
    }
  }, []);

  const fetchPhotos = (searchQuery) => {
    fetch(`https://api.pexels.com/v1/search?query=${searchQuery}&per_page=12`, {
      headers: {
        Authorization: apiKey,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPhotos(data.photos);
        setLoading(false); // Set loading state to false when fetching completes
      })
      .catch((error) => console.error("Error fetching photos:", error));
  };

  // saearch
  const [query, setQuery] = useState("");

  const handleSearchInputChange = (e) => {
    setQuery(e.target.value);
  };
  console.log(query);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchPhotos(query);
  };

  // catagory
  const [category, setCategory] = useState("all");

  // loader
  const [loading, setLoading] = useState(true);


// favphoto
const [favphoto,setFavphoto]=useState([])
  const handleAddFavPhoto = () => {
  console.log('fav photo')

}

  // Authorization

  // auth
  const provider = new GoogleAuthProvider();
  const auth = getAuth(appLogin);

  const [user, setUser] = useState([]);

  const handleGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  console.log(user);

  // sign out
  const handleSingOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser("");
        localStorage.setItem("user", JSON.stringify(""));
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // localStorage save
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")) || []);
  }, []);
  return (
    <PhotoContext.Provider
      value={{
        photos,
        loading,
        query,
        user,
        setQuery,
        fetchPhotos,
        handleSearchSubmit,
        handleSearchInputChange,
        handleGoogleSign,
        handleSingOut,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};
