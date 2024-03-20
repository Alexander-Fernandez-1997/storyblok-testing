"use client";
import React from "react";

export const Hamburger = () => {
  const toggleDropdown = () => {
    if (document.querySelector(".navbar-dropdown")) {
      document.querySelector(".navbar-dropdown").classList.toggle("d-none");
    }
  };
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
      className="align-self-center navbar-hamburger cursor-pointer"
      onClick={toggleDropdown}
    ></img>
  );
};
