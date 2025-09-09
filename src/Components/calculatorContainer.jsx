"use client";
import { useState } from "react";

export const Calculator = ({ isPrimary, children }) => {
  return (
    <button
      className={`h-[42px] w-[90px] rounded-[100px]  ${
        isPrimary ? "bg-gray-300 text-white" : "bg-gray-400 text-white"
      }`}
    >
      {children}
    </button>
  );
};

