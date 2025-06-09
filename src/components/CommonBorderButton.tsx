import React from "react";

interface CommonButtonProps {
  title: string;
  isDisabled?: boolean;
  isBlack?: boolean;
  isPrimary?: boolean;
}

const CommonBorderButton = ({
  title,
  isDisabled = false,
  isBlack = false,
  isPrimary = false
}: CommonButtonProps) => {
  let borderColor = "";
  let textColor = "";
  let borderClass = "";

  if (isBlack) {
    borderColor = "border-black";
    textColor = "text-black";
    borderClass = "border";
  } else if (isPrimary) {
    borderColor = "border-primary";
    textColor = "text-primary";
    borderClass = "border";
  } else {
    borderColor = "";
    textColor = "text-gray-800";
    borderClass = "";
  }

  return (
    <div
      className={`w-full h-[52px] rounded-xl flex items-center justify-center p-600 text-paragraph-120-R ${borderClass} ${borderColor} ${
        isDisabled ? "bg-background-guide text-text-disabled" : "bg-white"
      }`}
    >
      <p className={isDisabled ? "text-gray-400" : textColor}>{title}</p>
    </div>
  );
};

export default CommonBorderButton;
