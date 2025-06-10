"use client";
import React, { useRef, useEffect } from "react";

interface DateSelectorProps {
  year: number;
  month: number;
}

const DateSelector = ({ year, month }: DateSelectorProps) => {
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === year && today.getMonth() + 1 === month;
  const date = today.getDate();
  const lastDay = new Date(year, month, 0).getDate();
  const days = Array.from({ length: lastDay }, (_, i) => i + 1);

  const containerRef = useRef<HTMLDivElement>(null);
  const todayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCurrentMonth && todayRef.current && containerRef.current) {
      const container = containerRef.current;
      const todayElem = todayRef.current;
      const containerRect = container.getBoundingClientRect();
      const todayRect = todayElem.getBoundingClientRect();

      const scrollLeft =
        todayElem.offsetLeft -
        container.offsetLeft -
        containerRect.width / 2 +
        todayRect.width / 2;
      container.scrollTo({ left: scrollLeft, behavior: "smooth" });
    }
  }, [isCurrentMonth]);

  return (
    <div
      ref={containerRef}
      className="flex gap-4 overflow-x-auto px-2 py-3 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
    >
      {days.map((day) => (
        <div
          key={day}
          ref={isCurrentMonth && day === date ? todayRef : undefined}
          className={
            `min-w-[32px] text-center text-lg font-bold transition-colors ` +
            (isCurrentMonth && day === date ? "text-primary" : "text-text-lite")
          }
        >
          {String(day).padStart(2, "0")}
        </div>
      ))}
    </div>
  );
};

export default DateSelector;
