import React from "react";
import Image from "next/image";

const ButlerSelectionWrapper = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-paragraph-150-B text-text-black py-2">
        집사 선정이 필요해요.
      </p>
      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0"></div>
        <div className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0"></div>
        <div className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0"></div>
        <div className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0"></div>
        <div className="bg-background-chips w-40 h-40 rounded-lg flex-shrink-0"></div>
      </div>
    </div>
  );
};

export default ButlerSelectionWrapper;
