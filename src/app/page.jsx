"use client";
import { useState } from "react";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";

const buttons = [
  {
    value: "(",
    isPrimary: false,
  },
  {
    value: ")",
    isPrimary: false,
  },
  {
    value: "AC",
    isPrimary: false,
  },
  {
    value: "+/-",
    isPrimary: false,
  },

  {
    value: "7",
    isPrimary: true,
  },
  {
    value: "8",
    isPrimary: true,
  },
  {
    value: "9",
    isPrimary: true,
  },
  {
    value: "÷",
    isPrimary: false,
  },
  {
    value: "4",
    isPrimary: true,
  },
  {
    value: "5",
    isPrimary: true,
  },
  {
    value: "6",
    isPrimary: true,
  },

  {
    value: "x",
    isPrimary: false,
  },
  {
    value: "1",
    isPrimary: true,
  },
  {
    value: "2",
    isPrimary: true,
  },
  {
    value: "3",
    isPrimary: true,
  },
  {
    value: "-",
    isPrimary: false,
  },

  {
    value: "0",
    isPrimary: true,
  },
  {
    value: ".",
    isPrimary: false,
  },
  {
    value: "=",
    isPrimary: false,
  },
  {
    value: "+",
    isPrimary: false,
  },
];
export default function Home() {
  return (
    <div className="mt-10">
      <Input />
      <div className="flex flex-wrap w-[420px] gap-3">
        {buttons.map((button, index) => (
          <Button key={button.value + index} isPrimary={button.isPrimary}>
            {button.value}
          </Button>
        ))}
      </div>
    </div>
  );
}
