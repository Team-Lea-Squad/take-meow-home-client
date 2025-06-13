import React from "react";
import MainTitle from "@/components/MainTitle";
import { QuestionTitle } from "@/components/SubTitle";
import { registerCatAssets } from "@/utils/registerCatAssets";
import InputForm from "@/components/InputForm";
import ToggleButton from "./_components/ToggleButton";

const Page = () => {
  return (
    <div>
      <QuestionTitle subTitle="기본 정보" />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <MainTitle mainTitle={registerCatAssets[0].기본정보[0].title} />
          <InputForm />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <MainTitle mainTitle={registerCatAssets[0].기본정보[1].title} />
          <div className="w-full">
            <ToggleButton />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <MainTitle mainTitle={registerCatAssets[0].기본정보[2].title} />
          <InputForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
