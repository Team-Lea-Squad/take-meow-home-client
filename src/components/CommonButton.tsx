import React from "react";

interface CommonButtonProps {
  title: string;
  isDisabled?: boolean;
  isPoint?: boolean;
}

const CommonButton = ({
  title,
  isDisabled = false,
  isPoint = false
}: CommonButtonProps) => {
  return (
    <div
      className={`w-full h-[52px] rounded-xl flex items-center justify-center p-600 text-paragraph-120-R text-white ${
        isDisabled ? "bg-background-guide" : isPoint ? "bg-red-600" : "bg-black"
      }`}
    >
      <p className={isDisabled ? "text-gray-400" : "text-white"}>{title}</p>
    </div>
  );
};

export default CommonButton;
