import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import BottomButton from "@/components/BottomButton";

const Page = () => {
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
      <div className="flex flex-col gap-2">
        <p className="text-paragraph-150-B">2025/06/10 화</p>
        <p>김혜원님의 방문일을 수락하였습니다.</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-paragraph-150-B">2025/06/10 화</p>
        <p>김혜원님의 분양이 완료되었습니다.</p>
      </div>
      <BottomButton buttonTitle="분양 완료" />
    </div>
  );
};

export default Page;
