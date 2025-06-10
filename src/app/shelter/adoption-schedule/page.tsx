"use client";
import React from "react";
import SubTitle from "@/components/SubTitle";
import DateSelector from "@/components/DateSelector";
import StatusSummaryCards from "../_components/StatusSummaryCards";
import CatInfoCard from "@/components/CatInfoCard";
import { useRouter } from "next/navigation";

const Page = () => {
  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();
  const router = useRouter();

  const scheduleData = [
    {
      id: 1,
      time: "10:00",
      catName: "로로",
      userName: "레아",
      status: "분양 예정"
    },
    {
      id: 2,
      time: "14:30",
      catName: "나비",
      userName: "민지",
      status: "상담 완료"
    },
    {
      id: 3,
      time: "16:00",
      catName: "초코",
      userName: "지훈",
      status: "입양 대기"
    }
  ];

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
      {scheduleData?.map((schedule) => (
        <CatInfoCard
          key={schedule.id}
          time={schedule.time}
          catName={schedule.catName}
          userName={schedule.userName}
          status={schedule.status}
          onClick={() => router.push(`/shelter/detail-cat/${schedule.id}`)}
        />
      ))}
    </div>
  );
};

export default Page;
