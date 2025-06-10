"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import { scheduleData } from "@/data/scheduleData";
import CatButlerFitCard from "../_components/CatButlerFitCard";

import Image from "next/image";

const Page = () => {
  const params = useParams();
  const catId = Number(params.catId);

  const [hasApplicant, setHasApplicant] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const firstCat = scheduleData[0];

  useEffect(() => {
    setHasApplicant(true);
  }, [catId]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollLeft = e.currentTarget.scrollLeft;
    const width = e.currentTarget.offsetWidth;
    const index = Math.round(scrollLeft / width);
    setCurrentIndex(index);
  };

  const handleDotClick = (idx: number) => {
    const width = scrollRef.current?.offsetWidth || 0;
    scrollRef.current?.scrollTo({
      left: width * idx,
      behavior: "smooth"
    });
    setCurrentIndex(idx);
  };

  return (
    <div className="w-full flex flex-col m-0 gap-4">
      <div
        ref={scrollRef}
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-auto p-0 m-0 scrollbar-hide"
        onScroll={handleScroll}
      >
        <div className="flex w-max p-0 m-0">
          {firstCat.img.map((imgSrc: string, idx: number) => (
            <div
              key={idx}
              className="relative w-screen h-[280px] overflow-hidden"
            >
              <Image
                src={imgSrc}
                alt={`${firstCat.catName}의 이미지 ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1 w-full items-center justify-center p-2">
        {firstCat.img.map((_, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center"
            style={{
              width: currentIndex === idx ? 24 : 8,
              height: 8,
              transition: "width 0.3s cubic-bezier(0.4,0,0.2,1)",
              overflow: "hidden"
            }}
          >
            <Image
              src={
                currentIndex === idx
                  ? "/icons/dot-nav-color.svg"
                  : "/icons/dot-nav.svg"
              }
              alt="dot"
              width={currentIndex === idx ? 24 : 8}
              height={8}
              style={{
                cursor: "pointer",
                display: "block"
              }}
              onClick={() => handleDotClick(idx)}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col">
        <p>고양이를 사랑해서 앱까지 개발한</p>
        <div className="flex justify-between items-center w-full">
          <p className="text-head-sub text-text-black">김혜원, 33세</p>
          <p className="text-caption-120-R text-text-lite">서울시 강남구</p>
        </div>
      </div>
      <CatButlerFitCard />
    </div>
  );
};

export default Page;
