import React from "react";
import MainTitle from "@/components/MainTitle";
import { mainTitles } from "@/utils/titleAssets";

const Page = () => {
  return (
    <div>
      <MainTitle mainTitle={mainTitles.registrationComplete} />
    </div>
  );
};

export default Page;
