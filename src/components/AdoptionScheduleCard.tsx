"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface AdoptionScheduleCardProps {
  pendingCount?: number;
  inProgressCount?: number;
}

const AdoptionScheduleCard = ({
  pendingCount = 0,
  inProgressCount = 0
}: AdoptionScheduleCardProps) => {
  const router = useRouter();
  return (
    <div className="rounded-lg p-500 bg-background-chips gap-2 flex flex-col">
      <div
        className="text-text-black text-paragraph-150-B flex items-center"
        onClick={() => {
          router.push("/shelter/adoption-schedule");
        }}
      >
        분양 일정보기
        <Image
          src="/icons/arrow-right.svg"
          alt="right-button"
          width={18}
          height={18}
        />
      </div>
      <div className="flex flex-col gap-1 items-center text-paragraph-150-B ">
        <div className="flex justify-between w-full">
          <p>승인 대기</p>
          <p className="text-paragraph-150-R">{pendingCount} 마리</p>
        </div>
        <div className="flex justify-between w-full">
          <p>분양진행중</p>
          <p className="text-paragraph-150-R">{inProgressCount} 마리</p>
        </div>
      </div>
    </div>
  );
};

export default AdoptionScheduleCard;
