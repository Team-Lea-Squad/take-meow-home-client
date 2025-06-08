"use client";

import React from "react";
import { useRouter } from "next/navigation";

const BottomButton = ({ buttonTitle }: { buttonTitle: string }) => {
  const router = useRouter();
  return (
    <div
      className="w-full justify-center items-center  text-body-120-R h-[84px] fixed bottom-0 p-600"
      onClick={() => router.push("/")}
    >
      <div className="flex w-full justify-center items-center bg-black text-text-white text-body-120-R h-[52px] rounded-[12px]">
        {buttonTitle}
      </div>
    </div>
  );
};

export default BottomButton;
