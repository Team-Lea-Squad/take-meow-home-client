import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";

const Page = () => {
  return (
    <div>
      <MainTitle mainTitle={mainTitles.adoptionHistory} />
      <div>
        <p>집사 김혜원s</p>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
