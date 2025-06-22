"use client";

import React, { useState } from "react";
import Image from "next/image";

const Quiz = () => {
  const [answer, setAnswer] = useState<boolean | null>(null);

  console.log("answer", answer);

  return (
    <div className="flex flex-col py-7 gap-4">
      <div className="flex justify-between">
        <p className="text-title-120-B text-text-black">냥냥 상식 퀴즈</p>
        <div className="w-[100px] h-[24px] px-2 py-3 rounded-2xl bg-background-gray justify-center items-center flex flex-col">
          <p className="text-[#A6ABAF] text-caption-120-R">지난 퀴즈 보기</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 rounded-2xl shadow-[4px_4px_20px_rgba(0,0,0,0.08)] p-6">
        <p>
          고양이 화장실 모래는 한 번 채워두면 1~2주 동안 그대로 둬도 괜찮다.
        </p>
        <div className="flex gap-2 w-full">
          <button
            className="flex justify-center items-center gap-1 w-full p-[14px] rounded-lg bg-background-gray border border-line-medium h-10"
            onClick={() => setAnswer(true)}
          >
            <Image
              src="/icons/check-fill-md.svg"
              alt="status-yes"
              width={20}
              height={20}
            />
            그렇다
          </button>
          <button
            className="flex justify-center items-center gap-1 w-full p-[14px] rounded-lg bg-background-gray border border-line-medium h-10"
            onClick={() => setAnswer(false)}
          >
            <Image
              src="/icons/close-error-fill-md.svg"
              alt="status-no"
              width={20}
              height={20}
            />
            아니다
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
