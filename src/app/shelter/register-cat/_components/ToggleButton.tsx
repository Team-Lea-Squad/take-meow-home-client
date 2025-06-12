"use client";
import React, { useState } from "react";

interface ToggleButtonProps {
  onSelect?: (value: string) => void;
}

const ToggleButton = ({ onSelect }: ToggleButtonProps) => {
  const toggleText = ["남아", "여아", "모름"];
  const [selected, setSelected] = useState<string>("");

  const handleClick = (text: string) => {
    setSelected(text);
    onSelect?.(text);
  };

  return (
    <div className="flex w-full gap-2 h-14">
      {toggleText.map((text) => (
        <button
          key={text}
          onClick={() => handleClick(text)}
          className={`
            h-14
        flex-1
        px-4 py-2
        rounded-lg
        text-paragraph-120-B
        transition-colors
        
        ${
          selected === text
            ? "border-primary bg-white text-primary border-2"
            : "border-gray-200 bg-gray-100 text-gray-600 hover:border-primary"
        }
      `}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default ToggleButton;
