"use client";
import { useState } from "react";

export const Button = ({ isPrimary, children }) => {
 
  
  return (
    <button
     
      className={`h-[42px] w-[90px] rounded-[100px] active:bg-gray-500 cursor-pointer  ${
        isPrimary ? "bg-gray-300 text-white" : "bg-gray-400 text-white"
      }`}
    >
      {children}
    </button>
  );
};
