"use client";
import React from "react";

interface MainTitleProps {
  mainTitle: string;
  shelterName?: string;
  catName?: string;
  userName?: string;
}

const MainTitle = ({
  mainTitle,
  shelterName = "",
  catName,
  userName
}: MainTitleProps) => {
  return (
    <div className="">
      {shelterName ? (
        <>
          <div className="text-head-sub text-text-black font-bold">
            {shelterName} 보호소님,
          </div>
          <div className="text-head-sub text-text-black">{mainTitle}</div>
        </>
      ) : catName ? (
        <div className="text-head-sub text-text-black whitespace-pre">
          {catName}의 {mainTitle}
        </div>
      ) : userName ? (
        <div className="flex flex-col gap-1">
          <div className="text-body-120-R text-text-black">
            {userName} 집사야,
          </div>
          <div className="text-head-sub text-text-black whitespace-pre">
            {mainTitle}
          </div>
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
