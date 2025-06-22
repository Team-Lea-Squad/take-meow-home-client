"use client";
import React, { useState } from "react";
import CatBasicInfo from "./_components/CatBasicInfo";
import BottomButton from "@/components/BottomButton";
import CatHealth from "./_components/CatHealth";
import CatKeywords from "./_components/CatKeywords";
import ProgressBar from "@/components/ProgressBar";

const TOTAL_STEPS = 10;

const Page = () => {
  const [step, setStep] = useState(0);

  return (
    <div>
      <ProgressBar totalSteps={TOTAL_STEPS} currentStep={step} />
      {step === 0 && <CatBasicInfo />}
      {step === 1 && <CatHealth />}
      {step === 2 && <CatKeywords />}
      <BottomButton
        buttonTitle={step === 0 ? "다음" : "제출"}
        onClick={() => {
          if (step < TOTAL_STEPS - 1) setStep(step + 1);
        }}
      />
    </div>
  );
};

export default Page;
