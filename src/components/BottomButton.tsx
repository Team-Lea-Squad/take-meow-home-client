"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface BottomButtonProps {
  buttonTitle: string;
  disabled?: boolean;
  path?: string;
}

const BottomButton: React.FC<BottomButtonProps> = ({
  buttonTitle,
  disabled,
  path = "/"
}) => {
  const router = useRouter();

  return (
    <button
      className={`fixed bottom-0 left-0 right-0 px-600 h-[84px] flex justify-center items-center`}
      onClick={() => router.push(path)}
      disabled={disabled}
    >
      <div
        className={`w-full text-text-white text-body-120-R h-[52px] rounded-[12px] flex justify-center items-center
          ${disabled ? "bg-base-400" : "bg-black"}
        `}
      >
        {buttonTitle}
      </div>
    </button>
  );
};

export default BottomButton;
