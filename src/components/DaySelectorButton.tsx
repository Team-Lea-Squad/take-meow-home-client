"use client";

import React, { useState } from "react";

const DaySelectorButton = () => {
  const DAYS = ["월", "화", "수", "목", "금", "토", "일"];
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex gap-[2px] text-paragraph-120-B">
        <p>운영시간</p>
        <p className="text-text-error">*</p>
      </div>
      <div className="flex w-full space-x-2">
        {DAYS.map((day) => {
          const isSelected = selectedDays.includes(day);
          return (
            <button
              key={day}
              type="button"
              onClick={() => toggleDay(day)}
              className={`flex-1 min-w-[40px] py-2 text-center rounded-[8px] text-paragraph-120-R ${
                isSelected
                  ? "bg-background-focus text-text-white"
                  : "bg-background-gray text-text-title hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DaySelectorButton;
