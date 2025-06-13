import React from "react";
import MainTitle from "@/components/MainTitle";
import { registerCatAssets } from "@/utils/registerCatAssets";
import MultiToggleButton from "./MultiToggleButton";

const CatKeywords = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <MainTitle mainTitle={registerCatAssets.keywords.title} />
        <MultiToggleButton toggleText={registerCatAssets.keywords.content} />
      </div>
    </div>
  );
};

export default CatKeywords;
