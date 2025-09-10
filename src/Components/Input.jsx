"use client";
import { useState } from "react";
export const Input = () => {
  const [number, setNumber] = useState(0);
  return (
    <div
      className="w-[420px] h-[80px] flex justify-end items-end px-10 py-5 text-5xl"
      typeof="text"
    >
      <p>{number}</p>
    </div>
  );
};
