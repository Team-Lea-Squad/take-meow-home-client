"use client";
import React from "react";

const MainTitle = ({ mainTitle }: { mainTitle: string }) => {
  return (
    <div className="whitespace-pre-line flex items-center text-head-sub text-text-black py-1000 ">
      {mainTitle}
    </div>
  );
};

export default MainTitle;
