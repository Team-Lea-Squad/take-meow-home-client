"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getScheduleDetails } from "@/data/scheduleData";
import Image from "next/image";
import CommonButton from "@/components/CommonButton";
import CommonBorderButton from "@/components/CommonBorderButton";
import { useCatStore } from "@/store/catStore";

const Page = () => {
  const router = useRouter();
  const params = useParams();
  const catId = Number(params.catId);
  const catDetails = getScheduleDetails(catId);

  const [hasApplicant, setHasApplicant] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setHasApplicant(true);
  }, [catId]);

  useEffect(() => {
    if (catDetails?.catName) {
      useCatStore.getState().setCatName(catDetails.catName);
    }
  }, [catDetails?.catName]);

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

  if (!catDetails) {
    return <div>해당 고양이 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="w-full flex flex-col m-0 gap-4">
      <div
        ref={scrollRef}
        className="relative left-1/2 right-1/2 -translate-x-1/2 w-screen overflow-x-auto p-0 m-0 scrollbar-hide"
        onScroll={handleScroll}
      >
        <div className="flex w-max p-0 m-0">
          {catDetails.img.map((imgSrc: string, idx: number) => (
            <div
              key={idx}
              className="relative w-screen h-[280px] overflow-hidden"
            >
              <Image
                src={imgSrc}
                alt={`${catDetails.catName}의 이미지 ${idx + 1}`}
                fill
                className="object-cover"
                priority={idx === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-1 w-full items-center justify-center p-2">
        {catDetails.img.map((_, idx) => (
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
        <p>애교가 가득한</p>
        <div className="flex justify-between items-center w-full">
          <p className="text-head-sub text-text-black">{catDetails.catName}</p>
          <p className="text-caption-120-R text-text-lite">서울시 강남구</p>
        </div>
      </div>
      {hasApplicant ? (
        <CommonButton
          title="집사들이 지원하였어요! 🎉 선정하러 가요."
          onClick={() => {
            router.push(`/shelter/detail-cat/${catId}/applied-butler`);
          }}
        />
      ) : (
        <CommonBorderButton
          title="아직 지원한 집사가 없습니다😅, 곧 집사가 나타날거에요."
          isBlack
        />
      )}
      {/* <h1 className="text-2xl font-bold mb-4">
        {catDetails.catName}의 상세 정보
      </h1>
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="font-semibold">시간:</span>
          <span>{catDetails.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">입양자:</span>
          <span>{catDetails.userName}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">상태:</span>
          <span>{catDetails.status}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">나이:</span>
          <span>{catDetails.age}살</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">성별:</span>
          <span>{catDetails.gender}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="font-semibold">중성화:</span>
          <span>{catDetails.neutered ? "완료" : "미완료"}</span>
        </div>
      </div> */}
    </div>
  );
};

export default Page;
