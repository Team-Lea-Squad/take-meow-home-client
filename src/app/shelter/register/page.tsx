"use client";
import React, { useState } from "react";
import { mainTitles } from "@/utils/titleAssets";
import MainTitle from "@/components/MainTitle";
import InputForm from "@/components/InputForm";
import Address from "@/components/Address";
import DaySelectorButton from "@/components/DaySelectorButton";
import AddImage from "@/components/AddImage";
import BottomButton from "@/components/BottomButton";

const Page = () => {
  const [inputs, setInputs] = useState({
    shelter: "",
    owner: "",
    phone: "",
    business: ""
  });

  const isAllFilled = Object.values(inputs).every((v) => v.trim() !== "");

  return (
    <div className="flex flex-col gap-5">
      <MainTitle mainTitle={mainTitles.shelterRegistration} />
      <InputForm
        label="보호소명"
        placeholder="보호소명을 입력해주세요."
        isRequired
        value={inputs.shelter}
        onChange={(e) => setInputs({ ...inputs, shelter: e.target.value })}
      />
      <InputForm
        label="대표자명"
        placeholder="대표자명을 입력해주세요."
        isRequired
        value={inputs.owner}
        onChange={(e) => setInputs({ ...inputs, owner: e.target.value })}
      />
      <InputForm
        label="연락처"
        placeholder="보호소 연락처를 입력해주세요."
        isRequired
        isNumber
        value={inputs.phone}
        onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
      />
      <Address />
      <DaySelectorButton />
      <InputForm
        label="사업자등록번호"
        placeholder="사업자등록번호가 있으신 경우 입력해주세요."
        isRequired
        isNumber
        value={inputs.business}
        onChange={(e) => setInputs({ ...inputs, business: e.target.value })}
      />
      <AddImage label="보호소 이미지" />
      <div>
        <BottomButton buttonTitle="등록하기" disabled={!isAllFilled} />
      </div>
    </div>
  );
};

export default Page;
