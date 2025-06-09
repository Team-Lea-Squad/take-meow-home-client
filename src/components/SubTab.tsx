"use client";
import React, { useState } from "react";

const SubTab = () => {
  const [selected, setSelected] = useState(1);

  return (
    <div className="w-full bg-background-chips rounded-2xl p-1">
      <div className="relative flex w-full h-12 bg-background-chips rounded-2xl">
        <div
          className={`absolute top-0 left-0 w-1/2 h-full bg-white rounded-2xl transition-transform ${
            selected === 2 ? "translate-x-full" : ""
          }`}
        />
        <button
          onClick={() => setSelected(1)}
          className={`relative z-10 w-1/2 flex items-center justify-center py-3 font-bold text-lg ${
            selected === 1 ? "text-text-black" : "text-text-lite"
          }`}
        >
          탭
        </button>
        <button
          onClick={() => setSelected(2)}
          className={`relative z-10 w-1/2 flex items-center justify-center py-3 font-bold text-lg ${
            selected === 2 ? "text-text-black" : "text-text-lite"
          }`}
        >
          탭
        </button>
      </div>
    </div>
  );
};

export default SubTab;
