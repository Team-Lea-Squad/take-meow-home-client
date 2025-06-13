"use client";
import React, { useState } from "react";
import { registerCatAssets } from "@/utils/registerCatAssets";
import MainTitle from "@/components/MainTitle";
import InputForm from "@/components/InputForm";
import ToggleButton from "./ToggleButton";

const CatBasicInfo = () => {
  const [inputs, setInputs] = useState({
    catName: "",
    catAge: "",
    catGender: ""
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <MainTitle mainTitle={registerCatAssets.name.title} />
        <InputForm
          placeholder="ex) 루미"
          value={inputs.catName}
          onChange={(e) => setInputs({ ...inputs, catName: e.target.value })}
        />
      </div>
      <div className="flex flex-col gap-4 w-full">
        <MainTitle mainTitle={registerCatAssets.physical.title} />
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="p-2 w-1/3 items-center justify-center">성별</div>
          <ToggleButton toggleText={["남아", "여아", "모름"]} />
        </div>
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="p-2 w-1/3 items-center justify-center">나이</div>
          <InputForm
            rightText="살"
            value={inputs.catGender}
            isNumber
            onChange={(e) =>
              setInputs({ ...inputs, catGender: e.target.value })
            }
          />
        </div>
        <div className="w-full flex gap-4 justify-center items-center">
          <div className="p-2 w-1/3 items-center justify-center">몸무게</div>
          <InputForm
            rightText="kg"
            value={inputs.catGender}
            isNumber
            onChange={(e) =>
              setInputs({ ...inputs, catGender: e.target.value })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CatBasicInfo;
