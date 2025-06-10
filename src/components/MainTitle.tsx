"use client";
import React from "react";

interface MainTitleProps {
  mainTitle: string;
  name?: string;
  catName?: string;
}

const MainTitle = ({ mainTitle, name = "", catName }: MainTitleProps) => {
  return (
    <div className="">
      {name ? (
        <>
          <div className="text-head-sub text-text-black font-bold">
            {name} 보호소님,
          </div>
          <div className="text-head-sub text-text-black">{mainTitle}</div>
        </>
      ) : catName ? (
        <div className="text-head-sub text-text-black whitespace-pre">
          {catName}의 {mainTitle}
        </div>
      ) : (
        <div className="text-head-sub text-text-black whitespace-pre">
          {mainTitle}
        </div>
      )}
    </div>
  );
};

export default MainTitle;
