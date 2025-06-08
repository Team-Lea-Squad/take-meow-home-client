import React from "react";
import { mainTitles } from "@/utils/titleAssets";
import MainTitle from "@/components/MainTitle";
import InputForm from "@/components/InputForm";
import Address from "@/components/Address";

const page = () => {
  return (
    <div className="flex flex-col gap-5">
      <MainTitle mainTitle={mainTitles.shelterRegistration} />
      <InputForm
        label="보호소명"
        placeholder="보호소명을 입력해주세요."
        isRequired
      />
      <InputForm
        label="대표자명"
        placeholder="대표자명을 입력해주세요."
        isRequired
      />
      <InputForm
        label="연락처"
        placeholder="보호소 연락처를 입력해주세요."
        isRequired
        isNumber
      />
      <Address />
    </div>
  );
};

export default page;
