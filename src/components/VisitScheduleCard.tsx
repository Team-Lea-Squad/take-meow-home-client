"use client";

import React from "react";
import { useVisitStore } from "@/store/visitStore";

const VisitScheduleCard = () => {
  const { isAccepted, setIsAccepted } = useVisitStore();

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="flex flex-col p-4 border border-line-lite gap-4">
      <div className="flex flex-col gap-1">
        <p className="font-bold">방문 일정을 확인해주세요.</p>
        <p className="flex whitespace-pre text-point2 font-bold">
          방문예정일 2025/06/10 화요일 오후 18:00
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div
          className={`w-full rounded-lg flex items-center justify-center p-2 text-paragraph-120-B cursor-pointer ${
            isAccepted ? "bg-black text-white" : "bg-background-chips"
          }`}
          onClick={() => {
            handleAccept();
          }}
        >
          수락
        </div>
        <div className="w-full rounded-lg flex items-center bg-background-chips justify-center p-2 text-paragraph-120-B cursor-pointer">
          일정 변경 요청
        </div>
      </div>
    </div>
  );
};

export default VisitScheduleCard;
