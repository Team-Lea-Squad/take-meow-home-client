import React from "react";
import CatBasicInfo from "./_components/CatBasicInfo";
import BottomButton from "@/components/BottomButton";

const Page = () => {
  return (
    <div>
      <CatBasicInfo />
      <BottomButton buttonTitle="다음" />
    </div>
  );
};

export default Page;
