"use client";
import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import CommonButton from "@/components/CommonButton";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen">
      <MainTitle mainTitle={mainTitles.butlerSelectionComplete} />
      <div className="flex-1" />
      <div className="fixed left-0 right-0 bottom-0 bg-white flex flex-col gap-2 py-4 px-4 z-50">
        <CommonButton
          title="분양기록 보기"
          onClick={() => router.push("/shelter/adoption-history")}
        />
        <CommonButton
          title="보호소 메인으로 가기"
          onClick={() => router.push("/shelter")}
        />
      </div>
    </div>
  );
};

export default Page;
