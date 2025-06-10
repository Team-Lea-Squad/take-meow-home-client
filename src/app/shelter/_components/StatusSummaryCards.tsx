"use client";

import React, { useState } from "react";

const StatusSummaryCards = () => {
  const StatusSummary = [
    { title: "분양 예정", sub: "드디어 집사를 \n 만나는 날!", count: 4 },
    { title: "집사 선정", sub: "딱 맞는 집사를 골라냥", count: 11 },
    { title: "마감 일정", sub: "다시 집사 찾아줘냥", count: 3 }
  ];
  const [selectedIdx, setSelectedIdx] = useState<number | null>(0);

  return (
    <div className="flex justify-between h-24 w-full gap-2">
      {StatusSummary.map((status, idx) => (
        <div
          key={idx}
          className={`flex bg-white rounded-lg border p-400 gap-1 w-1/3 justify-between relative cursor-pointer transition-colors
            ${selectedIdx === idx ? "border-primary" : "border-border-chips"}`}
          onClick={() => setSelectedIdx(idx)}
        >
          <div className="flex flex-col gap-1">
            <div className="text-paragraph-120-B">{status.title}</div>
            <div className="text-caption-100-R text-text-lite whitespace-pre">
              {status.sub}
            </div>
          </div>
          <div className="absolute right-4 bottom-4 text-body-120-B">
            {status.count}건
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusSummaryCards;
