import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";
import CommonButton from "@/components/CommonButton";

const Page = () => {
  return (
    <div className="flex flex-col">
      <MainTitle mainTitle={mainTitles.butlerSelectionComplete} />
      <div className="flex flex-col gap-2 py-4">
        <CommonButton title="보호소 메인으로 가기" />
        <CommonButton title="보호소 메인으로 가기" />
      </div>
    </div>
  );
};

export default Page;
