"use client";
import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import { useRouter } from "next/navigation";
import RegisterCatCard from "@/components/RegisterCatCard";
import AdoptionScheduleCard from "@/components/AdoptionScheduleCard";
import TodayHighlightsCard from "@/components/TodayHighlightsCard";
import ButlerSelectionWrapper from "@/components/ButlerSelectionWrapper";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <MainTitle mainTitle={mainTitles.shelterHome} shelterName="냥냥냥" />
        <div
          className="text-text-lite text-paragraph-120-B"
          onClick={() => {
            router.push("/shelter/mypage");
          }}
        >
          보호소 정보보기
        </div>
      </div>
      <RegisterCatCard />
      <AdoptionScheduleCard pendingCount={10} inProgressCount={20} />
      <TodayHighlightsCard />
      <ButlerSelectionWrapper />
    </div>
  );
};

export default Page;
