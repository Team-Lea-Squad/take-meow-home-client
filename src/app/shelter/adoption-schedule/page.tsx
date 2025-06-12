"use client";
import React from "react";
import { SubTitle } from "@/components/SubTitle";
import DateSelector from "@/components/DateSelector";
import StatusSummaryCards from "../_components/StatusSummaryCards";
import CatInfoCard from "@/components/CatInfoCard";
import { useRouter } from "next/navigation";
import { scheduleData } from "@/data/scheduleData";

const Page = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between items-center">
        <SubTitle subTitle="오늘의 일정" />
        <p className="text-body-120-B text-primary">
          {currentMonth.toString().padStart(2, "0")}
        </p>
      </div>
      <DateSelector year={currentYear} month={currentMonth} />
      <StatusSummaryCards />
      {scheduleData
        ?.sort((a, b) => {
          const timeA = a.time.split(":").map(Number);
          const timeB = b.time.split(":").map(Number);
          return timeA[0] * 60 + timeA[1] - (timeB[0] * 60 + timeB[1]);
        })
        .map((schedule) => (
          <CatInfoCard
            key={schedule?.id}
            time={schedule?.time}
            catName={schedule?.catName}
            userName={schedule?.userName}
            status={schedule?.status}
            neutered={schedule?.neutered}
            onClick={() => router.push(`/shelter/detail-cat/${schedule.id}`)}
          />
        ))}
    </div>
  );
};

export default Page;
