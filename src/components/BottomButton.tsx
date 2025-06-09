"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";

const BottomButton = ({
  buttonTitle,
  disabled,
  onClick
}: {
  buttonTitle: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname === "/login") return null;

  return (
    <button
      className={`fixed bottom-0 left-0 right-0 px-600 h-[84px] flex justify-center items-center`}
      onClick={onClick ? onClick : () => router.push("/")}
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
