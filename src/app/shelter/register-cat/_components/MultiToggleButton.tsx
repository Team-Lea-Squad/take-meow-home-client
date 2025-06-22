"use client";
import React, { useState } from "react";

interface MultiToggleButtonProps {
  toggleText: string[];
  onSelect?: (values: string[]) => void;
}

const MultiToggleButton = ({
  onSelect,
  toggleText
}: MultiToggleButtonProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleClick = (text: string) => {
    let newSelected;
    if (selected.includes(text)) {
      newSelected = selected.filter((item) => item !== text);
    } else {
      newSelected = [...selected, text];
    }
    setSelected(newSelected);
    onSelect?.(newSelected);
  };

  return (
    <div className="flex w-full gap-2 h-14 flex-wrap">
      {toggleText.map((text) => (
        <button
          key={text}
          onClick={() => handleClick(text)}
          className={`
            h-14
            px-4 py-2
            rounded-lg
            text-paragraph-120-B
            transition-colors
            w-auto min-w-fit
            ${
              selected.includes(text)
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

export default MultiToggleButton;
