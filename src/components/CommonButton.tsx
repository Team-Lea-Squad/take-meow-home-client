"use client";
import React from "react";
import Image from "next/image";

interface CommonButtonProps {
  title?: string;
  isDisabled?: boolean;
  isPoint?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}

const CommonButton = ({
  title,
  isDisabled = false,
  isPoint = false,
  isLoading = false,
  onClick
}: CommonButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisabled}
      className={`w-full h-[52px] rounded-xl flex items-center justify-center p-600 text-paragraph-120-R text-white ${
        isDisabled
          ? "bg-background-guide"
          : isPoint
          ? "bg-red-600"
          : "bg-black/90"
      }`}
    >
      {isLoading ? (
        <div className="flex items-center gap-2">
          <div
            className="animate-[bounce_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: "0ms", transform: "translateY(-16px)" }}
          >
            <Image
              src="/dot.svg"
              alt="dot"
              width={8}
              height={8}
              className="animate-[opacity_1.5s_ease-in-out_infinite]"
              style={{ animationDelay: "0ms" }}
            />
          </div>
          <div
            className="animate-[bounce_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: "300ms", transform: "translateY(-16px)" }}
          >
            <Image
              src="/dot.svg"
              alt="dot"
              width={8}
              height={8}
              className="animate-[opacity_1.5s_ease-in-out_infinite]"
              style={{ animationDelay: "300ms" }}
            />
          </div>
          <div
            className="animate-[bounce_1.5s_ease-in-out_infinite]"
            style={{ animationDelay: "600ms", transform: "translateY(-16px)" }}
          >
            <Image
              src="/dot.svg"
              alt="dot"
              width={8}
              height={8}
              className="animate-[opacity_1.5s_ease-in-out_infinite]"
              style={{ animationDelay: "600ms" }}
            />
          </div>
        </div>
      ) : (
        <p className={isDisabled ? "text-gray-400" : "text-white"}>{title}</p>
      )}
    </button>
  );
};

export default CommonButton;
