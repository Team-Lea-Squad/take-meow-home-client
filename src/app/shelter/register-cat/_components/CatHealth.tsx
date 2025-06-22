"use client";
import React, { useState } from "react";
import MainTitle from "@/components/MainTitle";
import { registerCatAssets } from "@/utils/registerCatAssets";
import ToggleButton from "./ToggleButton";

const CatHealth = () => {
  const [inputs, setInputs] = useState({
    catName: "",
    catAge: "",
    catGender: ""
  });
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 w-full">
        <MainTitle mainTitle={registerCatAssets.health.title} />
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="p-2 w-1/3 items-center justify-center">
            중성화여부
          </div>
          <ToggleButton toggleText={["완료", "미완료", "모름"]} />
        </div>
      </div>
    </div>
  );
};

export default CatHealth;
