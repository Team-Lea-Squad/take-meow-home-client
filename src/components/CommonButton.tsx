import React from "react";

interface CommonButtonProps {
  title: string;
  isDisabled?: boolean;
}

const CommonButton = ({ title, isDisabled = false }: CommonButtonProps) => {
  return (
    <div
      className={`w-full h-[52px] rounded-lg flex items-center justify-center p-600 text-body-120-B ${
        isDisabled ? "bg-background-guide" : "bg-point2"
      }`}
    >
      <p className={isDisabled ? "text-gray-400" : "text-white"}>{title}</p>
    </div>
  );
};

export default CommonButton;
