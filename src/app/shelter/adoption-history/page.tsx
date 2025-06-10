"use client";

import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import BottomButton from "@/components/BottomButton";
import { useAdoptionStore } from "@/store/adoptionStore";
import VisitScheduleCard from "@/components/VisitScheduleCard";

const Page = () => {
  const isAdopted = useAdoptionStore((state) => state.isAdopted);
  const setIsAdopted = useAdoptionStore((state) => state.setIsAdopted);
  const adoptedTime = useAdoptionStore((state) => state.adoptedTime);
  const setAdoptedTime = useAdoptionStore((state) => state.setAdoptedTime);

  const handleAdopt = () => {
    setIsAdopted(true);
    const now = new Date();
    const hh = now.getHours().toString().padStart(2, "0");
    const mm = now.getMinutes().toString().padStart(2, "0");
    setAdoptedTime(`${hh}:${mm}`);
  };

  const today = new Date();
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  const formattedDate = `${today.getFullYear()}/${(today.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${today.getDate().toString().padStart(2, "0")} ${
    days[today.getDay()]
  }`;

  return (
    <div className="flex flex-col gap-4">
      <MainTitle mainTitle={mainTitles.adoptionHistory} />
      <div className="p-4 bg-background-chips rounded-lg">
        <p>집사 김혜원</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-paragraph-150-B">2025/05/31 토</p>
        <p>김혜원님이 루미의 집사로 채택되었습니다.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-paragraph-150-B">2025/06/10 화</p>
        <p>김혜원님이 방문일을 선택하였습니다.</p>
      </div>
      <VisitScheduleCard />
      <div className="flex flex-col gap-2">
        <p className="text-paragraph-150-B">2025/06/10 화</p>
        <p>김혜원님의 방문일을 수락하였습니다.</p>
      </div>
      {isAdopted && (
        <div className="flex flex-col gap-2">
          <p className="text-paragraph-150-B">
            {formattedDate} {adoptedTime && <span>{adoptedTime}</span>}
          </p>
          <p>🎉 김혜원님의 분양이 완료되었습니다.</p>
        </div>
      )}
      <BottomButton
        buttonTitle="분양 완료"
        disabled={isAdopted}
        onClick={handleAdopt}
      />
    </div>
  );
};

export default Page;
