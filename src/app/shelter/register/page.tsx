import React from "react";
import { mainTitles } from "@/utils/titleAssets";
import MainTitle from "@/components/MainTitle";

const page = () => {
  return (
    <div>
      <MainTitle mainTitle={mainTitles.shelterRegistration} />
    </div>
  );
};

export default page;
