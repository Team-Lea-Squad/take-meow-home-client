"use client";

import React, { useState } from "react";
import Image from "next/image";

const AddressSelector: React.FC = () => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const addressExamples = [
    {
      label: "도로명+건물번호",
      example: "ex) 송파대로 570"
    },
    {
      label: "지역명(동/읍/면/리)",
      example: "ex) 신천동 7 - 30"
    },
    {
      label: "건물명, 아파트명",
      example: "ex) 반포자이아파트"
    }
  ];

  return (
    <div className="flex flex-col gap-7">
      <div
        className={`flex justify-between w-full rounded-lg h-14 p-600 gap-2 border ${
          value ? "border-primary" : "border-line-medium"
        }`}
      >
        <input
          type="text"
          placeholder="도로명, 건물명, 지번 검색"
          className="placeholder:text-text-lite text-text-dark focus:outline-none w-full"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {isFocused && value ? (
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
        ) : (
          <Image
            src="/icons/search.svg"
            alt="search-icon"
            width={24}
            height={24}
          />
        )}
      </div>

      <div className="flex flex-col gap-4 text-text-dark">
        {value ? (
          <div>
            <p className="text-paragraph-120-B">검색 결과</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <p className="text-paragraph-120-B">입력 예시</p>
            {addressExamples.map(({ label, example }, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <p className="text-text-lite text-paragraph-120-R">{label}</p>
                <p className="text-primary text-body-120-M">{example}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressSelector;
