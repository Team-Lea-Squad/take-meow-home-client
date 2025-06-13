"use client";

import React, { useState } from "react";
import Image from "next/image";

interface InputFormProps {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  isNumber?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightText?: string;
}

const InputForm = ({
  label,
  placeholder = "",
  isRequired = false,
  isNumber = false,
  value = "",
  onChange,
  rightText
}: InputFormProps) => {
  const [, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex gap-2 w-full flex-col">
      <div className="flex gap-1 items-center">
        <p className="text-paragraph-120-B">{label}</p>
        {isRequired && <p className="text-text-error">*</p>}
      </div>
      <div
        className={`flex justify-between w-full rounded-lg h-14 p-600 gap-2 border ${
          value ? "border-primary" : "border-line-medium"
        }`}
      >
        <input
          type={isNumber ? "number" : "text"}
          inputMode={isNumber ? "numeric" : "text"}
          placeholder={placeholder}
          className="placeholder:text-text-lite text-text-dark focus:outline-none w-full"
          value={value}
          onChange={(e) => {
            if (isNumber) {
              const onlyNumber = e.target.value.replace(/[^0-9]/g, "");
              onChange?.({ ...e, target: { ...e.target, value: onlyNumber } });
            } else {
              onChange?.(e);
            }
          }}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {rightText && (
          <span className="flex items-center text-text-lite px-3">
            {rightText}
          </span>
        )}
        {isFocused && value && (
          <Image
            src="/icons/form-close.svg"
            alt="clear-input"
            width={24}
            height={24}
            style={{ cursor: "pointer" }}
            onMouseDown={(e) => {
              e.preventDefault();
              setValue("");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default InputForm;
